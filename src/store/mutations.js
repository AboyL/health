export default {
  changeHospital (state, hospital) {
    console.log(hospital)
    state.hospital = hospital
  },
  setHospitals (state, hospitals) {
    state.hospitals = hospitals
  }
}
