import './Hero.scss'

const Hero = () => {
  const titleId = 'Hero-title'

  return (
    <section className='hero hero-section' aria-labelledby={titleId}>
      <div className='hero__inner'>
        <div className='hero__body container'>
          <h2 className='hero__title' id={titleId}>Почувствуй молодость на вкус</h2>
          <button className='hero__button'>Подробнее о продукции</button>
        </div>
      </div>
    </section>
  )
}

export { Hero }
