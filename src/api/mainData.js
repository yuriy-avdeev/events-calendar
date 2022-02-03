const apiURL = 'https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62'

export const getEventsList = async () => {
  const res = await fetch(apiURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  return res.ok ?
    res.json()
    :
    Promise.reject(`код ${res.status}: ${res.statusText}`)
}