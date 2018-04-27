module.exports = function getAllMonthsFrom2011() {
  const start = 2011 // 使用的接口的起始计算年份
  const now = new Date().getFullYear()
  const result = []
  for (let i = 0; i < now - start + 1; i++) {
    const year = start + i
    for (let j = 1; j < 13; j++) {
      let month = j;
      if (month < 10) {
        month = '0' + month
      }
      result.push(`${year}${month}`)
    }
  }
  return result
}