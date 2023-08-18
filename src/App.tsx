import FooterSection from './components/layout/footer/footer-section'
import './App.less'

interface AppProps {
  card: JSX.Element
}

function App({ card }: AppProps) {
  return (
    <>
      <div className="app">
        <div className="app__main">{card}</div>
        <FooterSection />
      </div>
    </>
  )
}

export default App
