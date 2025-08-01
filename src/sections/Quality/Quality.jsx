import './Quality.scss'

const Quality = () => {
  const titleId = 'quality-section'

  const infoItems = [
    {
      title: 'Эксклюзивность',
      description: 'Наша вода не всегда в наличии, что подчеркивает ее статус',
    },
    {
      title: 'Широкие возможности оплаты',
      description:
        'Удобные для вас способы оплаты позволяют значительным образом сократить время на оформление заказа.',
    },
    {
      title: 'Отзывчивая поддержка',
      description:
        'Операторы всегда готовы ответить на ваши вопросы и помочь с оформлением заказа',
    },
  ]

  return (
    <section className='quality-section quality' aria-labelledby={titleId}>
      <div className='quality__inner inner container'>
        <h3 className='quality__title' id={titleId}>
          Качество и сервис на высшем уровне
        </h3>
        <div className='quality__description'>
          <p>
            Мы предлагаем воду высочайшего качества, надёжную доставку и
            внимательное отношение к клиентам. Ваше удовлетворение — наша
            главная цель.
          </p>
        </div>
        <div className='quality__info'>
          <ul className='quality__info-list'>
            {infoItems.map(({ title, description }) => (
              <li className='quality__info-item'>
                <h4 className='quality__info-item-title'>{title}</h4>
                <div className='quality__info-item-description'>
                  {description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Quality }
