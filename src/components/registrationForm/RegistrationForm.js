import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { TextField, Button } from '@material-ui/core'

import styles from './RegistrationForm.module.css'

const RegistrationForm = (props) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const listedUsers = JSON.parse(localStorage.getItem('listedUsers'))

  const onSubmitCall = useCallback(
    (e) => {
      //dispatch actions if using saga
      e.preventDefault()
      let values = {
        userName: userName,
        password: password,
      }
      let newUserList
      console.log(listedUsers);
      if (listedUsers) newUserList = [...listedUsers, values]
      else newUserList = [values]
      localStorage.setItem('listedUsers', JSON.stringify(newUserList))
      alert('User added successfully!')
      history.push('/login')
    },
    [history, listedUsers, password, userName]
  )

  return (
    <div className={styles.regForm}>
      <div className={styles.header}>Registration Form</div>

      <form onSubmit={onSubmitCall}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='name'
          label='Name'
          name='name'
          autoFocus
        />

        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='userName'
          label='User Name'
          name='userName'
          onChange={(e) => setUserName(e.target.value)}
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
          href='/login'>
          Cancel
        </Button>
      </form>
    </div>
  )
}
export default RegistrationForm
