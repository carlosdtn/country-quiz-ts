import Port from '../../components/icons/port'
import Button from '../../components/ui/button/button'

const CardCapitalSkeleton = () => {
  return (
    <div className="card--capital">
      <Port className="icon__port" />
      <h1 className="card__question">... is the capital of</h1>
      <div className="capital__answer">
        {Array.from(Array(4).keys()).map((index) => (
          <Button
            variant="secondary-outline"
            key={index}
            number={index + 1}
            type="button"
            isAnswer
            disabled
          >
            ...
          </Button>
        ))}
      </div>
    </div>
  )
}

export default CardCapitalSkeleton
