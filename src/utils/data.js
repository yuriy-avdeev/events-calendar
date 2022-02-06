import avatar from "../images/avatar.svg"

const name = 'John Doe'

export const data = {
  years: ['2021', '2022'],
  months: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  changedYear: '',
  changedMonth: '',
  user: {
    name,
    avatar,
    myEvents: [],
  }
}