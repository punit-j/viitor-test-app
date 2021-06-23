import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

import Login from '../login/Login'
import RegistrationForm from '../registrationForm/RegistrationForm'
import PrivateRoute from '../common/private-route/PrivateRoute'
import Home from '../home/Home'

const Main = props => {
    return(
        <div>
            <Route exact path='/' render={()=><Redirect to='/login'/>}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={RegistrationForm}/>
            <PrivateRoute path='/home'>
                <Home/>
            </PrivateRoute>
        </div>

    )
}

export default withRouter(Main)