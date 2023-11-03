import { createContext, useState } from 'react'

export const ScoreContext = createContext<{
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
}>({ score: -1, setScore: () => {} })

const ScoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState<number>(-1)

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  )
}

export default ScoreProvider
