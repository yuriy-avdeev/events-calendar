import avatar from "../images/avatar.svg"

const name = 'John Doe'

export const data = {
  years: ['2021', '2022'],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sen', 'Oct', 'Nov', 'Dec'],
  changedYear: '',
  changedMonth: '', // янв -> 0, фев -> 1...
  user: {
    name,
    avatar,
    myEvents: [],
  }
}