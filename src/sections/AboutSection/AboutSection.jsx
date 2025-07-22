import InlineSVG from 'react-inlinesvg'
import './AboutSection.scss'
import icon from '../../assets/images/about/subtract-1.svg'
import { AboutBlock } from './components/AboutBlock'

const AboutSection = () => {
  const titleId = 'About-section'

  const iconSvg = <InlineSVG src={icon} />

  const aboutBlocksInfo = [
    {
      title: 'кто мы такие?',
      description1: `Мы — команда, которая заботится о вашем здоровье и комфорте
                каждый день. Бренд Erzi — это чистая бутилированная вода,
                рожденная в природных источниках и доставленная до вас с
                сохранением всех её полезных свойств.`,
      description2: `
                Мы верим, что вода — это не просто напиток, а основа качества
                жизни. Именно поэтому мы контролируем каждый этап: от добычи до
                упаковки. Наша цель — сделать чистую воду доступной каждому.`,
      direction: 'left',
    },
    {
      title: 'почему мы?',
      description1: `Каждый день мы делаем выбор — что пить, что есть, чему доверять.
                В мире, где так много маркетинга и так мало настоящей заботы, мы
                хотим быть для вас тем, кто говорит честно и делает качественно.
                Erzi — это не просто вода. `,
      description2: `
                Мы верим, что здоровье начинается с простых вещей. Именно
                поэтому Erzi — это выбор тех, кто заботится о себе и своих
                близких. Мы собрали для вас 5 причин, почему эту воду выбирают
                тысячи людей каждый день — не потому что модно, а потому что
                по-настоящему важно.`,
      direction: 'right',
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
