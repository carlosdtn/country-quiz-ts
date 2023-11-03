import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Question } from 'src/utils/types'
import { ScoreContext } from '../../../context/score-context'
import useCountriesByRegion from '../../../hooks/useCountriesByRegion'
import CardSkeleton from '../../../skeleton/card-capital'
import Port from '../../icons/port'
import Button from '../../ui/button/button'
import {
  handleCorrectAnswer,
  handleWrongAnswer
} from '../../../utils/functions'
import './card-flag.less'

const CardFlag = () => {
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
    return <CardSkeleton hasFlag />
  }
  return (
    <div className="card--flag">
      <Port className="icon__port" />
      <div className="container">
        <div className="container__image">
          <img
            className="image"
            src={finalQuestions[page]?.prompt.flag}
            alt="country flag"
          />
        </div>
        <h1 className="container__question">
          Which country does this flag belong to?
        </h1>
      </div>
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

export default CardFlag
