import { IconHelpHexagon } from '@tabler/icons-react'
import Button from '../../ui/button/button'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './card-menu.less'

enum GameEnum {
  capital = 'capital',
  flag = 'flag'
}

interface IFormInput {
  game: GameEnum
}

const CardMenu = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const history = useNavigate()

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    event?.preventDefault()
    if (data.game === GameEnum.capital) {
      history('game/guess-capital')
    } else if (data.game === GameEnum.flag) {
      history('game/guess-flag')
    }
  }

  return (
    <div className="menu">
      <div className="menu__header">
        <IconHelpHexagon color="#f9a826" size="8rem" />
        <h1 className="menu__header--title">COUNTRY QUIZ</h1>
        <p className="menu__header--description">
          Explore, Guess, and Conquer: Match Flags and Capitals in an Engaging
          Adventure!
        </p>
      </div>
      <form className="menu__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="menu__form--input">
          <select className="menu__form--select" {...register('game')}>
            <option defaultValue="default">Select a game...</option>
            <option value="capital">Guess the capital</option>
            <option value="flag">Guess the flag</option>
          </select>
        </div>
        <Button variant="primary" type="submit">
          Start
        </Button>
      </form>
    </div>
  )
}

export default CardMenu
