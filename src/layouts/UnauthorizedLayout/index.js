import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'

// Pages
import Login from '../../pages/Login'
import Register from '../../pages/Register'
const UnauthorizedLayout = () => {
  return <div className="unauthorized-layout">
          <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
}
export default UnauthorizedLayout