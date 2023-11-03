import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Question } from 'src/utils/types'
import Button from '../../../components/ui/button/button'
import useCountriesByRegion from '../../../hooks/useCountriesByRegion'
import Port from '../../icons/port'
import './card-capital.less'
import { ScoreContext } from '../../../context/score-context'
import CardCapitalSkeleton from '../../../skeleton/card-capital'

const CardCapital = () => {
  const { questions, isLoading } = useCountriesByRegion('europe')
  const [answerSelected, setAnswerSelected] = useState<boolean>(false)
  const [page, setPage] = useState<number>(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [finalQuestions, setFinalQuestions] = useState<Question[]>([])
  const [accumulatedScore, setAccumulatedScore] = useState<number>(0)
  const { setScore } = useContext(ScoreContext)
  const history = useNavigate()
  const totalQuestions = 5

  const gotoResults = () => {
    if (page === totalQuestions) {
      setScore(accumulatedScore)
      history('/result')
    }
  }
  useEffect(() => {
    setFinalQuestions(questions.slice(0, totalQuestions))
    setSelectedIndex(null)
  }, [isLoading])

  useEffect(() => {
    gotoResults()
  }, [page])

  useEffect(() => {
    const unloadCallback = (event: {
      preventDefault: () => void
      returnValue: string
    }) => {
      event.preventDefault()
      event.returnValue = ''
      return ''
    }

    window.addEventListener('beforeunload', unloadCallback)
    return () => {
      window.removeEventListener('beforeunload', unloadCallback)
    }
  }, [])

  const handleNext = () => {
    setPage(page + 1)
    setSelectedIndex(null)
    setAnswerSelected(false)
  }

  const handleAnswer = (index: number) => {
    setSelectedIndex(index)
    console.log(index)
    setAnswerSelected(true)
    if (index === finalQuestions[page]?.correctAnswerIndex) {
      setAccumulatedScore(accumulatedScore + 1)
    }
  }

  const handleCorrectAnswer = (index: number) => {
    if (answerSelected) {
      return index === finalQuestions[page]?.correctAnswerIndex
    }
  }

  const handleWrongAnswer = (index: number) => {
    return (
      selectedIndex !== finalQuestions[page]?.correctAnswerIndex &&
      selectedIndex === index
    )
  }

  if (isLoading) {
    return <CardCapitalSkeleton />
  }

  return (
    <div className="card--capital">
      <Port className="icon__port" />
      <h1 className="card__question">
        {finalQuestions[page]?.prompt} is the capital of
      </h1>
      <div className="capital__answer">
        {finalQuestions[page]?.options.map((alternative, index) => (
          <Button
            variant="secondary-outline"
            key={index}
            number={index + 1}
            type="button"
            isAnswer
            isCorrect={handleCorrectAnswer(index)}
            isWrong={handleWrongAnswer(index)}
            onClick={() => handleAnswer(index)}
            disabled={answerSelected}
          >
            {alternative}
          </Button>
        ))}
        {answerSelected && (
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  )
}

export default CardCapital
