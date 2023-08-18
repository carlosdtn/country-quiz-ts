import React, { ButtonHTMLAttributes } from 'react'
import Check from '../../icons/check'
import Cross from '../../icons/cross'
import classNames from 'classnames'
import './button.less'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?:
    | 'primary'
    | 'primary-outline'
    | 'secondary'
    | 'secondary-outline'
    | 'blue-outline'
  isAnswer?: boolean
  number?: number
  isCorrect?: boolean
  isWrong?: boolean
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    variant = 'primary',
    isAnswer,
    number,
    isCorrect,
    isWrong,
    ...props
  },
  ref
) => {
  const buttonClassName = `btn btn-${variant}`
  const answerClassName = classNames(buttonClassName, {
    'answer--correct': isAnswer && isCorrect,
    'answer--wrong': isAnswer && isWrong
  })
  const textClassName = classNames({
    answer__text: !isAnswer,
    'answer__text--start': isAnswer
  })

  const icon = () => {
    if (isAnswer && isCorrect) {
      return <Check width="1.6rem" />
    } else if (isAnswer && isWrong) {
      return <Cross width="1.6rem" />
    } else {
      return
    }
  }

  return (
    <button className={answerClassName} ref={ref} {...props}>
      {isAnswer && number && (
        <span className="answer__letter">
          {String.fromCharCode(64 + number)}
        </span>
      )}
      <span className={textClassName}>
        {children}
        {icon()}
      </span>
    </button>
  )
}

export default React.forwardRef(Button)
