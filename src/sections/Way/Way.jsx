import './Way.scss'
import wayImage from '../../assets/images/way/way.png'

const Way = () => {
  const titleId = 'Way-title'

  return (
    <section className='way way-section' aria-labelledby={titleId}>
      <h2 className='visually-hidden' id={titleId}>
        Way
      </h2>
      <div className='way__body'>
        <img
          src={wayImage}
          alt=''
          className='way__body-image'
          width={1000}
          height={284}
        />
      </div>
    </section>
  )
}

export { Way }
