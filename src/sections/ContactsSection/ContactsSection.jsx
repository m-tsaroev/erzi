import { Form } from '@/components/ui/Form'
import './ContactsSection.scss'
import { Field } from '@/components/ui/Field'
import { FormProvider, useForm } from 'react-hook-form'
import { useState } from 'react'
import { Button } from '@/components/ui/Button/Button'

const ContactsSection = () => {
  const titleId = 'contacts-section'

  const methods = useForm({ mode: 'onChange' })

  const field = {
    type: 'textarea',
    name: 'username',
    autoComplete: 'current-email',
    placeholder: 'Username',
    className: 'auth__field',
    isRequired: true,
    requiredText: 'Не валидный username',
    requiredMessage:
      'Ведите от 3 до 30 символов. Имя может начинаться только с букв и цифр',
    requiredRegex: /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё0-9_-]{2,29}$/,
  }

  const [textareaSymbolCount, setTextareaSymbolCount] = useState(0)

  const onTextareaChange = (event) => {
    const { target } = event

    setTextareaSymbolCount(target.value.length)
  }

  return (
    <section className='contacts-section contacts' aria-labelledby={titleId}>
      <div className='contacts__inner inner container'>
        <h1 className='contacts__title' id={titleId}>
          контакты
        </h1>
        <div className='contacts__body'>
          <div className='contacts__info'>
            <div className='contacts__info-numbers'>
              <span>+7 (495) 445-01-06</span>
              <span>+7 (928) 359-51-38</span>
            </div>
            <div className='contacts__info-mail'>Email: zakaz@erziaqua.ru</div>
          </div>
          <FormProvider {...methods}>
            <Form
              classNam='contacts__form'
              title='Свяжитесь с нами'
              mode='light-blur'
              isModal={false}
            >
              <div className='contacts__form-fields'>
                <Field
                  type='number'
                  name='contacts-number-field'
                  autoComplete='current-number'
                  placeholder='Номер телефона'
                  className='contacts__form-field'
                  isRequired={true}
                />
                <Field
                  type='textarea'
                  name='message'
                  autoComplete='current-textarea'
                  placeholder='Напишите о своей проблеме'
                  className='contacts__form-field contacts__form-field-textarea'
                  isRequired={true}
                  onChange={onTextareaChange}
                  symbolCount={textareaSymbolCount}
                  maxSymbolCount={60}
                />
              </div>
              <Button
                className='contacts__form-button'
                text='Отправить'
                type='submit'
                mode="white"
              />
            </Form>
          </FormProvider>
        </div>
      </div>
    </section>
  )
}

export { ContactsSection }
