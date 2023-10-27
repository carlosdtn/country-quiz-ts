export interface FullCountry {
  name: {
    common: string
    official: string
  }
  capital: string[]
  region: string
  subregion: string
}

export interface ShortCountry {
  name: string
  capital: string
}

export type Question = {
  id: number
  prompt: string
  options: string[]
  correctAnswerIndex: number
}
