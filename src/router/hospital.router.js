import HospitalRegistration from 'views/hospital/HospitalRegistration'
import HospitalCounsel from 'views/hospital/HospitalCounsel'
import hospitalMedicalHistory from 'views/hospital/hospitalMedicalHistory'
import hospitalCheckExplain from 'views/hospital/hospitalCheckExplain'

export default [
  {
    path: '/hospital_registration',
    name: 'HospitalRegistration',
    component: HospitalRegistration
  },
  {
    path: '/hospital_counsel',
    name: 'HospitalCounsel',
    component: HospitalCounsel
  },
  {
    path: '/hospital_medical_history',
    name: 'hospitalMedicalHistory',
    component: hospitalMedicalHistory
  },
  {
    path: '/hospitalCheckExplain',
    name: 'hospitalCheckExplain',
    component: hospitalCheckExplain
  }
]
