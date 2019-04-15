import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './../Routes'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'

const App = () => {
  // client store
  const store = getClientStore()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {routes.map(route => (
            <Route {...route}/>
          ))}
        </div> 
      </BrowserRouter>
    </Provider>
  )
}
// hydrate
ReactDOM.hydrate(<App />, 
  document.getElementById('root')
)
