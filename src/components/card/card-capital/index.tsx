import { generateQuestions } from '../../../utils/functions'
import Button from '../../../components/ui/button/button'
import useCountriesByRegion from '../../../hooks/useCountriesByRegion'
import { formatCountries } from '../../../utils/formatters'
import Port from '../../icons/port'
import './card-capital.less'
import { useCallback, useState, useEffect } from 'react'
import { Question } from 'src/utils/types'
import classNames from 'classnames'

const CardCapital = () => {
  const { questions, isLoading, error } = useCountriesByRegion('europe')
  const [page, setPage] = useState<number>(0)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [finalQuestions, setFinalQuestions] = useState<Question[]>([])

  console.log('questions', questions)
  useEffect(() => {
    setFinalQuestions(questions)
  }, [isLoading])

  const handleNext = () => {
    setPage(page + 1)
  }

  const handleAnswer = (index: number) => {
    setSelectedIndex(index)
    console.log(index)
    if (index === finalQuestions[page]?.correctAnswerIndex) {
      console.log('correct')
    } else {
      console.log('incorrect')
    }
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
            onClick={() => handleAnswer(index)}
          >
            {alternative}
          </Button>
        ))}
        {selectedIndex === finalQuestions[page]?.correctAnswerIndex && (
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  )
}

export default CardCapital
