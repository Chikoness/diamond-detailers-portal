import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage'
import EmployeePage from '../views/EmployeePage'
import ExistingAppointmentPage from '../views/Appointment/ExistingAppointmentPage'
import AuthenticationPage from '../views/AuthenticationPage'
import RegisterEmployee from '../views/Employee/RegisterEmployee'
import EditEmployee from '../views/Employee/EditEmployee'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/employee',
    name: 'Employee',
    component: EmployeePage
  },
  {
    path: '/employee/new',
    name: 'Register New Employee',
    component: RegisterEmployee
  },
  {
    path: '/employee/edit/:id',
    name: 'Change Employee Details',
    component: EditEmployee
  },
  {
    path: '/authentication',
    name: 'Authenticate',
    component: AuthenticationPage
  },
  {
    path: '/appointment/edit/:id',
    name: 'Edit Appointment',
    component: ExistingAppointmentPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
