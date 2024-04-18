export const URLBASE = 'https://bytekend.onrender.com'

export const ENDPOINT = {
  people: `${URLBASE}/people`,
  business: `${URLBASE}/business`,
  login: `${URLBASE}/login`,
  users: `${URLBASE}/users`,
  enterprise: `${URLBASE}/enterprise`,
  searchapp: `${URLBASE}/searchapp`,
  createjobs:`${URLBASE}/createjobs`,
  businesses:`${URLBASE}/businesses`,
  profile:`${URLBASE}/profile`,
}
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/
