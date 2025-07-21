import './AboutSection.scss'

const AboutSection = () => {
  const titleId = 'About-section'

  return (
    <section className='about-section about' aria-labelledby={titleId}>
      <div className='about__inner inner container'>
        <h1 className='about__title'>немного о нас</h1>
        <div className='about__watemark'>erzi</div>
        <div className='about__body'>
          <div className='about__info-block about__info-block--left'>
            <h2 className='about__info-title'>кто мы такие?</h2>
            <div className='about__info-description'>
              <p>
                Мы — команда, которая заботится о вашем здоровье и комфорте
                каждый день. Бренд Erzi — это чистая бутилированная вода,
                рожденная в природных источниках и доставленная до вас с
                сохранением всех её полезных свойств. <br />
                Мы верим, что вода — это не просто напиток, а основа качества
                жизни. Именно поэтому мы контролируем каждый этап: от добычи до
                упаковки. Наша цель — сделать чистую воду доступной каждому.
              </p>
            </div>
          </div>
          <div className='about__info-block'>
            <h2 className='about__info-title'>почему мы?</h2>
            <div className='about__info-description'>
              <p>
                Каждый день мы делаем выбор — что пить, что есть, чему доверять.
                В мире, где так много маркетинга и так мало настоящей заботы, мы
                хотим быть для вас тем, кто говорит честно и делает качественно.
                Erzi — это не просто вода. <br />
                Мы верим, что здоровье начинается с простых вещей. Именно
                поэтому Erzi — это выбор тех, кто заботится о себе и своих
                близких. Мы собрали для вас 5 причин, почему эту воду выбирают
                тысячи людей каждый день — не потому что модно, а потому что
                по-настоящему важно.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { AboutSection }
