/**
 * 作用: 动态添加css，JavaScript
 * 作者: yangzeyan
 * 日期: 2018-03-28
 */
// 已加载完成的js数量
let hadLoadNum = 0

const createLink = (url) => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url

  return link
}

const createScript = (url, cb, len) => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  script.onload = script.onreadystatechange = function () {
    // this.readyState 这是FF的判断语句，因为ff下没有readyState这人值，IE的readyState肯定有值
    // this.readyState, this.readyState这是IE的判断语句
    if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
      hadLoadNum++
      if (len === hadLoadNum) {
        cb()
      }
    }
  }

  return script
}

const loadStyle = (url) => {
  // 创建虚拟dom
  const fragment = document.createDocumentFragment()
  const head = document.getElementsByTagName('head')[0]

  if (url instanceof Array) {
    url.map((item) => {
      fragment.appendChild(createLink(item))
      return item
    })
  } else {
    fragment.appendChild(createLink(url))
  }

  head.appendChild(fragment)
}

const loadScript = (url, cb) => {
  // 创建虚拟dom
  const fragment = document.createDocumentFragment()
  const head = document.getElementsByTagName('head')[0]
  hadLoadNum = 0

  if (url instanceof Array) {
    const len = url.length

    url.map((item) => {
      fragment.appendChild(createScript(item, cb, len))
      return item
    })
  } else {
    fragment.appendChild(createScript(url, cb, 1))
  }

  head.appendChild(fragment)
}

export default {
  loadStyle,
  loadScript
}
