import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { LoginMessage } from '../../../config/Constants'

const PrivateRoute = (props) => {
  const { children, ...rest } = props
  const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !loggedInUser || !loggedInUser.isUserLoggedIn ? (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: location,
                message: LoginMessage,
              },
            }}
          />
        ) : (
          children
        )
      }}
    />
  )
}

export default PrivateRoute
