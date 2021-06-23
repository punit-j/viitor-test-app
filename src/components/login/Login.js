import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { TextField, Button } from '@material-ui/core'

import styles from './Login.module.css'

const Login = (props) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const listedUsers = JSON.parse(localStorage.getItem('listedUsers'))

  const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))

  const history = useHistory()

  useEffect(() => {
    if (loggedInUser && loggedInUser.isUserLoggedIn) history.push('/home')
  }, [history, loggedInUser])

  const onSubmitCall = useCallback(
    (e) => {
      //dispatch actions if using saga
      e.preventDefault()
      let values = {
        userName: userName,
        password: password,
      }
      if (
        listedUsers &&
        listedUsers.some(
          (user) => JSON.stringify(user) === JSON.stringify(values)
        )
      ) {
        sessionStorage['loggedInUser'] = JSON.stringify({
          isUserLoggedIn: true,
          userDetails: values,
        })
        history.push('/home')
      } else alert('Invalid User Details!')
    },
    [history, listedUsers, password, userName]
  )

  return (
    <div className={styles.loginForm}>
      <div className={styles.header}>Login</div>
      <form onSubmit={onSubmitCall}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='userName'
          label='User Name'
          name='userName'
          onChange={(e) => setUserName(e.target.value)}
          autoFocus
        />

        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='password'
          label='Password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>

        <Button
          variant='outlined'
          color='default'
          style={{ marginLeft: '50px' }}
          href='/register'>
          New User?
        </Button>
      </form>
    </div>
  )
}
export default Login
