const http = require('http')
const qs = require('qs')

//timor.tech/api/holiday

http: module.exports = function getHoliday(query) {
  return new Promise((resolve, reject) => {
    const queryString = qs.stringify(query)
    console.log(queryString)
    const options = {
      hostname: 'www.easybots.cn',
      port: 80,
      path: `/api/holiday.php?${queryString}`,
      method: 'GET'
    }
    const req = http.request(options, res => {
      res.setEncoding('utf8')
      let result = ''
      res.on('data', chunk => {
        result += chunk.toString()
      })
      res.on('end', () => {
        resolve(result)
      })
    })
    req.on('error', e => {
      reject(e)
    })
    req.end()
  })
}
