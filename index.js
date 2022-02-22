// 1) failed 
// const fibonacci = new Array(20).fill(1).map((cur, i, arr) => {
//     const result = cur + arr[i + 2 - 1]
//     return result
// })

// 2)
const arr = new Array(20).fill(1)

for(let i = 2; i < arr.length; i ++) arr[i] = arr[i - 1] + arr[i - 2]