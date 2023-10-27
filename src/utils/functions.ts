import { Question, ShortCountry } from './types'

export const shuffle = <T>(array: T[]): T[] => {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffledArray[i]
    shuffledArray[i] = shuffledArray[j]
    shuffledArray[j] = temp
  }
  return shuffledArray
}

export const generateQuestions = (countries: ShortCountry[]) => {
  const shuffledCountries = shuffle(
    countries.map((country, index) => {
      const question: Question = {
        id: index,
        prompt: country.capital,
        options: [],
        correctAnswerIndex: 0
      }
      const options = countries.map((country) => country.name)
      const shuffledOptions = shuffle(options)
      question.options = shuffledOptions.slice(0, 3)
      question.options.push(country.name)
      question.options = shuffle(question.options)
      question.correctAnswerIndex = question.options.indexOf(
        countries[index].name
      )

      return question
    })
  )
  return shuffledCountries
}
