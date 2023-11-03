import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  handleCorrectAnswer,
  handleWrongAnswer
} from '../../../utils/functions'
import { Question } from 'src/utils/types'
import Button from '../../../components/ui/button/button'
import { ScoreContext } from '../../../context/score-context'
import useCountriesByRegion from '../../../hooks/useCountriesByRegion'
import CardSkeleton from '../../../skeleton/card-capital'
import Port from '../../icons/port'
import './card-capital.less'

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
    setAnswerSelected(true)
    if (index === finalQuestions[page]?.correctAnswerIndex) {
      setAccumulatedScore(accumulatedScore + 1)
    }
  }

  if (isLoading) {
    return <CardSkeleton />
  }

  return (
    <div className="card--capital">
      <Port className="icon__port" />
      <h1 className="card__question">
        {finalQuestions[page]?.prompt.capital} is the capital of
      </h1>
      <div className="capital__answer">
        {finalQuestions[page]?.options.map((alternative, index) => (
          <Button
            variant="secondary-outline"
            key={index}
            number={index + 1}
            type="button"
            isAnswer
            isCorrect={handleCorrectAnswer(index, {
              answerSelected,
              page,
              finalQuestions
            })}
            isWrong={handleWrongAnswer(index, {
              selectedIndex,
              page,
              finalQuestions
            })}
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
