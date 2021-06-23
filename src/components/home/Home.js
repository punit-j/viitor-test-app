import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import SearchBar from 'material-ui-search-bar'
import { Button } from '@material-ui/core'

import styles from './Home.module.css'
import Table from '../common/table/Table'
import { getColumns } from './Columns'
import { searchByText } from '../../utils/commonfunctions-utls'

const Home = (props) => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchText, setSearchText] = useState('')

  const history = useHistory()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(
        (res) => res.json()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      )
      .then((d) => {
        setFilteredData(d)
        setData(d)
      })
  }, [])

  const onSearch = () => {
    let matchedData = searchByText(filteredData, getColumns, searchText)
    setFilteredData(matchedData)
  }

  const logOut = () => {
    sessionStorage.clear()
    history.push('/login')
  }

  return (
    <div className={styles.homePage}>
      <Button className={styles.logoutBtn} variant='outlined' color='default' onClick={logOut}>Logout</Button>
      <div className={styles.header}>
        Home
      </div>
      <div>Sort by clicking on column names</div>
      <div className={styles.searchBar}>
        <SearchBar
          onChange={(value) => setSearchText(value)}
          onRequestSearch={onSearch}
          onCancelSearch={() => setFilteredData(data)}
        />
      </div>
      <Table data={filteredData} columns={getColumns} />
    </div>
  )
}
export default Home
