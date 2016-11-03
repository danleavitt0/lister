import firebaseConfig from './firebaseConfig'
import effects from 'redux-effects'
import domready from '@f/domready'
import reducer from './reducer'
import * as fire from 'vdux-fire'
import vdux from 'vdux/dom'
import theme from './theme'
import flow from 'redux-flo'

var app = require('./app').default

domready(() => {
  subscribe((state) => {
    return render(app(state), {uiTheme: theme})
  })
})

const {subscribe, render, replaceReducer} = vdux({
  reducer,
  initialState: {},
  middleware: [
    flow(),
    effects,
    fire.middleware(firebaseConfig),
  ]
})

if (module.hot) {
  module.hot.accept(['./app', './reducer'], () => {
    replaceReducer(require('./reducer').default)
    app = require('./app').default
  })
}