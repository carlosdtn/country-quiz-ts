import classNames from 'classnames'
import Port from '../../components/icons/port'
import Button from '../../components/ui/button/button'

const CardSkeleton: React.FC<{ hasFlag?: boolean }> = ({ hasFlag = false }) => {
  return (
    <div
      className={classNames({
        'card--flag': hasFlag,
        'card--capital': !hasFlag
      })}
    >
      <Port className="icon__port" />
      {hasFlag ? (
        <div className="container">
          <div className="container__image">
            <div className="image-skeleton" />
          </div>
          <h1 className="container__question">
            Which country does this flag belong to?
          </h1>
        </div>
      ) : (
        <h1 className="card__question">... is the capital of</h1>
      )}
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

export default CardSkeleton
