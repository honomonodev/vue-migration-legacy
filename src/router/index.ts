import Vue from 'vue'
import Router from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'
import TaskListView from '@/views/TaskListView.vue'
import TimeTrackerView from '@/views/TimeTrackerView.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: DashboardView },
  { path: '/login', component: LoginView },
  { path: '/profile', component: ProfileView },
  { path: '/tasks', component: TaskListView },
  { path: '/time-tracker', component: TimeTrackerView }
]

export default new Router({
  mode: 'history',
  routes
})