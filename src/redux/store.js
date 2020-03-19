import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware  } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
let storeEnhancers
if (process.env.NODE_ENV === 'production') {
  storeEnhancers = compose(applyMiddleware(thunk))
} else {
  // storeEnhancers = compose(composeWithDevTools(applyMiddleware(thunk, logger)))
  storeEnhancers = compose(composeWithDevTools(applyMiddleware(thunk)))
}



const store = createStore(rootReducer, {}, storeEnhancers)
if (module.hot && process.env.NODE_ENV !== 'production') {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./rootReducer', () => {
    console.log('replacing reducer...')
    const nextRootReducer = require('./rootReducer').default
    store.replaceReducer(nextRootReducer)
  })
}
export default store