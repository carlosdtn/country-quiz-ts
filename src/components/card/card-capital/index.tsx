import Port from '../../icons/port'
import Button from '../../../components/ui/button/button'
import './card-capital.less'

const alternatives = ['Malaysia', 'Indonesia', 'Singapore', 'Thailand']

const CardCapital = () => {
  return (
    <div className="card--capital">
      <Port className="icon__port" />
      <h1 className="card__question">Kuala Lumpur is the capital of</h1>
      <div className="capital__answer">
        {alternatives.map((alternative, index) => (
          <Button
            variant="secondary-outline"
            key={index}
            number={index + 1}
            type="button"
            isAnswer
          >
            {alternative}
          </Button>
        ))}
        {/* <Button variant="primary">Next</Button> */}
      </div>
    </div>
  )
}

export default CardCapital
