import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/home'
import Login from './containers/login'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key: 'home'
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    key: 'login'
  }
]

export default routes
