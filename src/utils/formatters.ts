import { FullCountry, ShortCountry } from './types'

export const formatCountries = (countries: FullCountry[]) => {
  const countryList = countries.map((country) => {
    const formattedCountry = {
      name: country.name.common,
      capital: country.capital[0]
    }
    return formattedCountry
  })
  return countryList
}
