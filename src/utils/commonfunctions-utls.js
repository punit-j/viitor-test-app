import _ from 'lodash'

export const sortingFn = (a, b, desc) => {
  // force null and undefined to the bottom
  a = a === null || a === undefined ? '' : a
  b = b === null || b === undefined ? '' : b
  // force any string values to lowercase
  a = typeof a === 'string' ? a.toLowerCase() : a
  b = typeof b === 'string' ? b.toLowerCase() : b
  // Return either 1 or -1 to indicate a sort priority
  if (a > b) {
    return 1
  }
  if (a < b) {
    return -1
  }
  return 0
}

export const searchByText = (data, columns, filter) => {
  if (filter && columns && data) {
    let filtered = []
    const searchText = filter.toLowerCase()

    data.forEach((row) => {
      try {
        let isMatchFound = false
        columns.forEach((column) => {
          let columnValue = _.get(row, column.accessor)
            ? _.get(row, column.accessor).toString().toLowerCase()
            : ''
          if (columnValue && columnValue.includes(searchText)) {
            isMatchFound = true
            return null
          }
        })
        if (isMatchFound) {
          filtered.push(row)
        }
      } catch (e) {
        return null
      }
    })
    return filtered
  } else {
    return data
  }
}
