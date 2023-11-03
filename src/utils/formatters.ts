import { FullCountry } from './types'

export const formatCountries = (countries: FullCountry[]) => {
  const countryList = countries.map((country) => {
    const formattedCountry = {
      name: country.name.common,
      capital: country.capital[0],
      flag: country.flags.png
    }
    return formattedCountry
  })
  return countryList
}
