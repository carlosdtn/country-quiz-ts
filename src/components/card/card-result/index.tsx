import Winners from '../../../components/icons/winners'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import './card-result.less'
import { ScoreContext } from '../../../context/score-context'

const CardResult = () => {
  const history = useNavigate()
  const { score } = useContext(ScoreContext)

  useEffect(() => {
    if (score === -1) {
      history('/')
    }
  }, [])

  return (
    <div className="card--result">
      <Winners className="icon__winners" />
      <div className="result">
        <h1 className="result__title">Results</h1>
        <p className="result__description">
          You got <span className="result__score">{score}</span> correct answers
        </p>
      </div>
      <div>
        <Link to="/" className="btn btn-blue-outline">
          Try again
        </Link>
      </div>
    </div>
  )
}

export default CardResult
