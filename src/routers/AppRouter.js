import React from 'react'
import { BrowserRouter , Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from '../redux/store'
import { AUTHENTICATE_THE_USER } from '../redux/types'
import UnauthorizedLayout from '@/layouts/UnauthorizedLayout'
import AuthorizedRoute from '@/layouts/AuthorizedRoute'
import BasicLayout from '@/layouts/BasicLayout'
import PublicComponent from '@/components/Public'
import config from '@/routers/config'

// // Check for token and update application state if required
// const userinfo = localStorage.getItem('userinfo')
// if(userinfo) {
//   store.dispatch({ type: AUTHENTICATE_THE_USER, payload: JSON.parse(userinfo)})
// }

const AppRouter = () => {
  return <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/auth'   component={ UnauthorizedLayout }/>
          <AuthorizedRoute path='/'  component={ BasicLayout }/>
          <Redirect to='/auth'/>
        </Switch>
      </BrowserRouter>
      <PublicComponent/>
  </Provider>
    
}

export default AppRouter