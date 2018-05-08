export default {
  changeSubject (state, subject) {
    console.log(subject)
    state.subject = subject
  },
  setSubjects (state, subjects) {
    state.subjects = subjects
  },
  setRegisterNumber (state, registerNumber) {
    localStorage.registerNumber = registerNumber
    state.registerNumber = registerNumber
  },
  setRegisterTime (state, registerTime) {
    localStorage.registerTime = registerTime
    state.registerTime = registerTime
  },
  setRegisterRange (state, registerRange) {
    localStorage.registerRange = registerRange
    state.registerRange = registerRange
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
