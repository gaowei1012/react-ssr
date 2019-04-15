import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './../Routes'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'
import { renderRoutes } from 'react-router-config'

const App = () => {
  // client store
  const store = getClientStore()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {renderRoutes(routes)}
        </div> 
      </BrowserRouter>
    </Provider>
  )
}
// hydrate
ReactDOM.hydrate(<App />, 
  document.getElementById('root')
)
