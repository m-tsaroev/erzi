const registrationFields = [
  {
    type: 'username',
    name: 'username',
    autoComplete: 'current-email',
    placeholder: 'Username',
    className: 'auth__field',
    isRequired: true,
    requiredText: 'Не валидный username',
    requiredMessage:
      'Ведите от 3 до 30 символов. Имя может начинаться только с букв и цифр',
    requiredRegex: /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё0-9_-]{2,29}$/,
  },
  {
    type: 'email',
    name: 'email',
    autoComplete: 'current-email',
    placeholder: 'Email',
    className: 'auth__field',
    isRequired: true,
    requiredText: 'Не валидный Email',
    requiredMessage: 'Не валидный Email',
    requiredRegex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  },
  {
    type: 'password',
    name: 'password',
    autoComplete: 'current-password',
    placeholder: 'Password',
    className: 'auth__field',
    isRequired: true,
    requiredText: 'Не валидный Пароль',
    requiredMessage: 'Символов должно быть не меньше 6',
    requiredRegex: /^.{6,}$/,
  },
]

const loginFields = [
  {
    type: 'email',
    name: 'email',
    autoComplete: 'current-email',
    placeholder: 'Email',
    className: 'auth__field',
    isRequired: true,
    requiredText: 'Не валидный Email',
    requiredMessage: 'Не валидный Email',
    requiredRegex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  },
  {
    type: 'password',
    name: 'password',
    autoComplete: 'current-password',
    placeholder: 'Password',
    className: 'auth__field',
    isRequired: true,
    requiredText: 'Не валидный Пароль',
    requiredMessage: 'Символов должно быть не меньше 6',
    requiredRegex: /^.{6,}$/,
  },
]

export { registrationFields, loginFields }
