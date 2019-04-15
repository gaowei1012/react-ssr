import React from 'react'
import { StaticRouter, Route } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

export const render = (store, routes, req) => {

    const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>
            {routes.map(route => (
              <Route {...route}/>
            ))}
          </div>
        </StaticRouter>
      </Provider>
    ))
  
    return `
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>react-ssr</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script src="/index.js"></script>
        </body>
      </html>
    `
}
