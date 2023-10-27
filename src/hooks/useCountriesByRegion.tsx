import { useState, useEffect } from 'react'
import { FullCountry } from '../utils/types'
import { formatCountries } from '../utils/formatters'
import { generateQuestions } from '../utils/functions'

const useCountriesByRegion = (region: string) => {
  const [countries, setCountries] = useState<FullCountry[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const fetchCountries = async () => {
    await fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  const formattedCountries = formatCountries(countries)
  const questions = generateQuestions(formattedCountries)

  return { questions, isLoading, error }
}

export default useCountriesByRegion
