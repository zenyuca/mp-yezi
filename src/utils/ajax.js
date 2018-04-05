let domainname = 'https://www.test.com'
if (process.env.NODE_ENV === 'production') {
  domainname = 'https://www.zenyuca.club'
}
export const ajax = (url = '', options = {}) => {
  return new Promise((resolve, reject) => {
    let method = options.method || 'GET'
    let header = options.header || {
      'content-type': 'application/json'
    }
    wx.request({
      url: `${domainname}${url}`,
      method,
      header,
      success: function (res) {
        resolve(res.data)
      },
      fail: function (res) {
        console.log(res)
        reject(res)
      }
    })
  })
}
