import './AboutBlock.scss'
import substruc1 from '@/assets/images/about/subtract-1.svg'
import substruc2 from '@/assets/images/about/subtract-2.svg'
import InlineSVG from 'react-inlinesvg'
import classNames from 'classnames'

const AboutBlock = (props) => {
  const {
    /**
     * 'left' (default) | 'right'
     */
    direction = 'left',
    title,
    description1,
    description2,
    className,
  } = props

  return (
    <div
      className={classNames('about__block', className, {
        [`about__block--${direction}`]: direction,
      })}
    >
      <h2 className='about__block-title'>{title}</h2>
      <div className='about__block-description'>
        <p>
          {description1} <br />
          {description2}
        </p>
      </div>
    </div>
  )
}

export { AboutBlock }
