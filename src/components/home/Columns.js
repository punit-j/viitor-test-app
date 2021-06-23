export const getColumns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'User ID', accessor: 'userId' },
  { Header: 'Title', accessor: 'title' },
  {
    Header: 'Completed',
    Cell: (row) => {
      return row.original.completed ? 'true' : 'false'
    },
  },
]
