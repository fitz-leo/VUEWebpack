const fs = require('fs')

function getFileByPath(fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {

      if (err) return reject(err)
      resolve(dataStr)

    })
  })
}



// 当 我们有这样的需求： 哪怕前面的 Promise 执行失败了，但是，不要影响后续 promise 的正常执行，此时，我们可以单独为 每个 promise，通过 .then 指定一下失败的回调；

// 有时候，我们有这样的需求，个上面的需求刚好相反：如果 后续的Promise 执行，依赖于 前面 Promise 执行的结果，如果前面的失败了，则后面的就没有继续执行下去的意义了，此时，我们想要实现，一旦有报错，则立即终止所有 Promise的执行；

getFileByPath('./files/1.txt')
.then(function (data) {
  console.log(data)
  //读取文件2
  return getFileByPath('./files/2.txt')
},function (err) {
  console.log('这是失败的结果:'+err.message)
  return getFileByPath('./files/2.txt')
})
.then(function (data) {
  console.log(data)
  return getFileByPath('./files/3.txt')
})
.then(function (data) {
  console.log(data)
})