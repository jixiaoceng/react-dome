import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import reducer from '@/redux/reducer'
import routes from '@/router/'
import '@/styles/index.scss'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
// 生成store
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  reduxDevTools
))

ReactDom.render(
  <Provider store={ store }>
    <BrowserRouter>
      <React.Fragment>
        { renderRoutes(routes) }
      </React.Fragment>
    </BrowserRouter>
  </Provider>, document.querySelector('#root')
)

