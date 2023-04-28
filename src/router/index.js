import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage'
import EmployeePage from '../views/EmployeePage'
import CustomerPage from '../views/CustomerPage'
import EmployerPage from '../views/EmployerPage'
import AppointmentPageC from '../views/AppointmentPageC'

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
    path: '/customer',
    name: 'Customer',
    component: CustomerPage
  },
  {
    path: '/customer/appointment',
    name: 'Appointment',
    component: AppointmentPageC
  },
  {
    path: '/employer',
    name: 'Employer',
    component: EmployerPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
