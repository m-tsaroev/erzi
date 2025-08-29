import classNames from 'classnames'
import './Button.scss'

const Button = (props) => {
  const {
    type,
    className,
    onClick,
    text,

    /**
     * '' (default) | blue | black | white
     */

    mode,
  } = props

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames('button', className, {
        [`button--${mode}`]: mode,
      })}
    >
      {text}
    </button>
  )
}

export { Button }
