import FooterSection from './components/layout/footer/footer-section'
import './App.less'
import ScoreProvider from './context/score-context'

interface AppProps {
  card: JSX.Element
}

function App({ card }: AppProps) {
  return (
    <>
      <div className="app">
        <ScoreProvider>
          <div className="app__main">{card}</div>
        </ScoreProvider>
        <FooterSection />
      </div>
    </>
  )
}

export default App
