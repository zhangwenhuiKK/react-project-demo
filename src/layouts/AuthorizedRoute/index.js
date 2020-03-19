import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
const AuthorizedRoute = (props) => {
    
    const { component : Component, logged, ...rest}  = props
    console.log('logged:'+logged)
    return <Route {...rest} render={ props => {
        return logged
         ? <Component {...props} />
         : <Redirect to="/auth/login"/>
        }
    }/>
}
const mapStateToProps = ({ UserState }) => ({
    logged : UserState.logged,
})
export default connect(mapStateToProps)(AuthorizedRoute)