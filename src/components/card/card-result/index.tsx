import Winners from '../../../components/icons/winners'
import { Link } from 'react-router-dom'
import './card-result.less'

const CardResult = () => {
  return (
    <div className="card--result">
      <Winners className="icon__winners" />
      <div className="result">
        <h1 className="result__title">Results</h1>
        <p className="result__description">
          You got <span className="result__score">4</span> correct answers
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
