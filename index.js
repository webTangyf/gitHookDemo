const getType = value => {
  return Object.prototype.toString
    .call(value)
    ?.replace(/^\[object\s([a-zA-Z]+)\]$/, '$1')
    ?.toLowerCase()
}
function add(a, b) {
  if (
    // 如果A, B的类型不在这个里面
    [a, b].map(getType).some(type => {
      return !['number', 'string'].includes(type)
    }) ||
    [...new Set([a, b].map(getType)).values()].length !== 1
  ) {
    throw new Error(
      'add 函数参数类型为 number 或者 string, 并且所有参数类型需统一'
    )
  }
  return a + b
}

module.exports = {
  add
}
