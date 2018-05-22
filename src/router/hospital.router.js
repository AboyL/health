import HospitalRegistration from 'views/hospital/HospitalRegistration'
import HospitalCounsel from 'views/hospital/HospitalCounsel'
import hospitalMedicalHistory from 'views/hospital/hospitalMedicalHistory'
import hospitalCheckExplain from 'views/hospital/hospitalCheckExplain'
import hospitalPhysicalExamination from 'views/hospital/hospitalPhysicalExamination'
import hospitalPhysicalExaminationDetail from 'views/hospital/hospitalPhysicalExaminationDetail'
import userPhysicalExamination from 'views/hospital/userPhysicalExamination'

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
  },
  {
    path: '/hospitalPhysicalExamination',
    name: 'hospitalPhysicalExamination',
    component: hospitalPhysicalExamination
  },
  {
    path: '/hospitalPhysicalExaminationDetail/:key',
    name: 'hospitalPhysicalExaminationDetail',
    component: hospitalPhysicalExaminationDetail
  },
  {
    path: '/userPhysicalExamination',
    name: 'userPhysicalExamination',
    component: userPhysicalExamination
  }
]
