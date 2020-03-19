// 计算 评论数
export const calcCommentsCount = commentList => {
    let count = commentList.length
    commentList.forEach(item => {
      count += item.replies.length
    })
    return count
  }
  
// 获取 url query 参数
export const decodeQuery = url => {
    const params = {}
    const paramsStr = url.replace(/\.*\?/, '') // a=1&b=2&c=&d=xxx&e
    paramsStr.split('&').forEach(v => {
      const d = v.split('=')
      if (d[1] && d[0]) params[d[0]] = d[1]
    })
    return params
  }

  // 获取 token
export function getToken() {
  let token = ''
  const userInfo = get('userInfo')

  if (userInfo && userInfo.token) {
    token = 'Bearer ' + userInfo.token
  }

  return token
}