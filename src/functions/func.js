import { data } from '../utils/data'

const getCardData = (card) => {
  const eventsList = JSON.parse(localStorage.getItem('eventsList'))
  const cardIndex = eventsList.findIndex(c => c.id === +card.id)
  return { eventsList, cardIndex }
}


// popup <- form: EventItem
export const addVisitor = (card, newVisitor) => {
  const { eventsList, cardIndex } = getCardData(card)

  // - изм. карточку локально
  card.visitors = [...card.visitors, newVisitor]

  // - изм. карточку -> в localStorage
  eventsList.splice(cardIndex, 1, card) // <- обновил card в eventsList
  localStorage.setItem('eventsList', JSON.stringify(eventsList))

  // - изм. состояние -> в список событий user'a
  data.user.myEvents.push(card)
}


// popup <- confirm: myEvents и EventItem
export const removeVisitor = (card) => {
  const { eventsList, cardIndex } = getCardData(card)

  // - изм. карточку локально 
  const tempArr = card.visitors.filter(v => v !== data.user.name)
  card.visitors = [...tempArr]

  // - изм. карточку -> в localStorage
  eventsList.splice(cardIndex, 1, card)
  localStorage.setItem('eventsList', JSON.stringify(eventsList))

  // - изм. состояние -> в список событий user'a
  data.user.myEvents = data.user.myEvents.filter(c => c.id !== card.id)

  return data.user.myEvents
}


// <- Main и MyEvents
export const getList = (initialList) => {
  return initialList.filter(card => {
    const [year, month] = card.date.split('-')
    return (year === data.changedYear) && (+month === +data.changedMonth + 1) && card // янв -> 0, фев -> 1...
  })
}
