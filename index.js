function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return null
  }

  return a + b
}


function sortAsc(arr) {

  if (!Array.isArray(arr)) {
    return null
  }

  return arr.sort()
}

function sortDesc(arr) {
  if (!Array.isArray(arr)) {
    return null
  }
  return arr.sort((a, b) => {
    if (a > b) {
      return -1
    } else if (a < b) {
      return 1
    } else {
      return 0
    }
  })
}


module.exports = {
  sum,
  sortAsc,
  sortDesc
}
