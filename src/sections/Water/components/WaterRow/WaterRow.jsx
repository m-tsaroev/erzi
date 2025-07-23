import classNames from 'classnames'
import './WaterRow.scss'

const WaterRow = (props) => {
  const {
    window,
    text1,
    text2,
    /**
     * 'left' (default) | 'right'
     */
    textDirection = 'left',
  } = props

  return (
    <div className='row'>
      {textDirection === 'left' ? (
        <>
          <div className='row__texts'>
            <div
              className={classNames('row__text', {
                [`row__text--${textDirection}`]: textDirection,
              })}
            >
              <p>{text1}</p>
            </div>
            {text2 && (
              <div
                className={classNames('row__text', {
                  [`row__text--${textDirection}`]: textDirection,
                })}
              >
                <p>{text2}</p>
              </div>
            )}
          </div>
          <div className='row__window'>
            {window && <img src={window} alt='' />}
          </div>
        </>
      ) : (
        <>
          <div className='row__window'>
            {window && <img src={window} alt='' />}
          </div>
          <div className='row__texts'>
            <div
              className={classNames('row__text', {
                [`row__text--${textDirection}`]: textDirection,
              })}
            >
              <p>{text1}</p>
            </div>
            {text2 && (
              <div
                className={classNames('row__text', {
                  [`row__text--${textDirection}`]: textDirection,
                })}
              >
                <p>{text2}</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export { WaterRow }
