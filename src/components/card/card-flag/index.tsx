import Port from '../../icons/port'
import Button from '../../ui/button/button'
import './card-flag.less'

const alternatives = ['Malaysia', 'Indonesia', 'Singapore', 'Thailand']

const CardFlag = () => {
  return (
    <div className="card--flag">
      <Port className="icon__port" />
      <div className="container">
        <div className="container__image">
          <img
            className="image"
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg"
            alt="country flag"
          />
        </div>
        <h1 className="container__question">
          Which country does this flag belong to?
        </h1>
      </div>
      <div className="container__answer">
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

export default CardFlag
