module.exports = function formatHoliday(holidayText) {
  console.log(holidayText)
  const holidayObj = JSON.parse(holidayText)
  const triple = []
  const double = []
  for (const [yearMonth, holidays] of Object.entries(holidayObj)) {
    for (const [day, flag] of Object.entries(holidays)) {
      if (flag === '2') {
        triple.push(`${yearMonth}${day}`)
      }
      if (flag === '1') {
        double.push(`${yearMonth}${day}`)
      }
    }
  }
  return JSON.stringify({
    triple,
    double
  })
}
