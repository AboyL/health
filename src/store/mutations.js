export default {
  changeSubject (state, subject) {
    console.log(subject)
    state.subject = subject
  },
  setSubjects (state, subjects) {
    state.subjects = subjects
  },
  setToken (state, token) {
    console.log('setToken')
    console.log(token)
    localStorage.token = token
    state.token = localStorage.token
  },
  clearToken (state) {
    localStorage.token = ''
    state.token = localStorage.token
  }
}
