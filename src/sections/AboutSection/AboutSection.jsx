import './AboutSection.scss'
import { AboutBlock } from './components/AboutBlock'

const AboutSection = () => {
  const titleId = 'About-section'

  const aboutBlocksInfo = [
    {
      title: 'кто мы такие?',
      description1: `Erzi — это премиальный бренд природной воды, добываемой в экологически чистых горных источниках Альп. Наша миссия — доставлять кристально чистую воду с идеальным минеральным составом прямо к вашему столу.`,
    },
    {
      title: 'почему мы?',
      description1: `Мы сочетаем современные технологии с бережным отношением к природе. Каждая бутылка Erzi — это результат многолетних исследований и строгого контроля качества на каждом этапе производства.`,
    },
    {
      title: 'Что мы выбираем каждый день?',
      description1: `Мы верим, что выбор воды — это выбор в пользу себя. Каждый день мы выбираем заботу, качество и честность. Мы не гонимся за трендами — мы просто делаем воду, которую пьём сами. Потому что важно не только что пить — важно, кого вы выбираете.`,
    },
  ]

  return (
    <section className='about-section about' aria-labelledby={titleId}>
      <div className='about__inner inner container'>
        <h1 className='about__title'>немного о нас</h1>
        <div className='about__watemark'>erzi</div>
        <div className='about__body'>
          {aboutBlocksInfo.map((aboutBlock, index) => (
            <AboutBlock {...aboutBlock} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { AboutSection }
