function minNumber (a, b) {
  if (a < b) {
    return a
  } else if (b < a) {
    return b
  } else {
    return 'a and b are equal'
  }
}

console.log(minNumber(4, 8))
console.log(minNumber(10, 7))
