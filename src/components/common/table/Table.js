import React from 'react'
import ReactTable from 'react-table-v6'
import { sortingFn } from '../../../utils/commonfunctions-utls'

import 'react-table-v6/react-table.css'

const Table = (props) => {
  const { data, columns } = props

  return (
    <div>
      <ReactTable
        data={data}
        columns={columns}
        filterable={false}
        showPaginationBottom={true}
        defaultSortMethod={(a, b, desc) => sortingFn(a, b, desc)}
      />
    </div>
  )
}
export default Table
