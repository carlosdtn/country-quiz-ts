export interface FullCountry {
  name: {
    common: string
    official: string
  }
  capital: string[]
  region: string
  subregion: string
  flags: {
    png: string
  }
}

export interface ShortCountry {
  name: string
  capital: string
  flag: string
}

export type Question = {
  id: number
  prompt: {
    capital: string
    flag: string
  }
  options: string[]
  correctAnswerIndex: number
}
