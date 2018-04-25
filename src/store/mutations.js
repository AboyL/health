export default {
  changeSubject (state, subject) {
    console.log(subject)
    state.subject = subject
  },
  setSubjects (state, subjects) {
    state.subjects = subjects
  }
}
