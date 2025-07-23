import InlineSVG from 'react-inlinesvg'
import './Water.scss'
import abstruckt from '@/assets/images/water/abstract.svg'
import window1 from '@/assets/images/water/window-1.png'
import window2 from '@/assets/images/water/window-2.png'
import window3 from '@/assets/images/water/window-3.png'
import { WaterRow } from './components/WaterRow'

const Water = () => {
  const titleId = 'water-section'

  const rows = [
    {
      window: window1,
      text1:
        'Вода ERZI добывается из природных источников в экологически чистых районах, что гарантирует её природную чистоту и безопасность без лишней химии.',
      textDirection: 'left',
    },
    {
      window: window2,
      text1:
        'Используются современные технологии розлива, которые сохраняют природную структуру и вкус воды. Это важно для тех, кто заботится о здоровье.',
      text2: `Вода ERZI имеет сбалансированный состав минералов — подходит для ежедневного употребления взрослыми и детьми. Это делает
её универсальной: и для спорта, и для дома.`,
      textDirection: 'right',
    },
    {
      window: window3,
      text1: `Каждая партия проходит лабораторные исследования.
Вода соответствует всем санитарным нормам и стандартам качества, включая ГОСТ.`,
      textDirection: 'left',
    },
    {
      window: '',
      text1: 'Покупая ERZI, вы поддерживаете отечественного производителя и локальное производство, а не крупные международные корпорации.',
      textDirection: 'right',
    }
  ]

  return (
    <section className='water-section water' aria-labelledby={titleId}>
      <div className='water__inner inner container'>
        <h1 className='water__title' id={titleId}>
          ERZI
          <br />
          Вода, которую выбирают
        </h1>
        <div className='water__body'>
          {
            rows.map((row) => (
              <WaterRow {...row} />
            ))
          }
          <div className="water__body-line"></div>
        </div>
      </div>
      <InlineSVG src={abstruckt} />
    </section>
  )
}

export { Water }
