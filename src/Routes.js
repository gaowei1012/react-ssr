import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/home'
import Login from './containers/login'

export default (
  <div>
    <Route path='/' exact component={Home}></Route>
    <Route path='/login' component={Login}></Route>
  </div>
)
