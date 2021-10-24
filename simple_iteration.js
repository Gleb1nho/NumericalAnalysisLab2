const PI = Math.PI
const epsilon = 0.000005
const f = (x) => { return Math.sin(x) + 0.1 - 2*x*x }
const x0 = 0.45
const phi = (xn) => { 
  return Math.sin(xn)+0.1-2*xn*xn+xn
}

let xn = phi(x0)
let previousValue = x0
let n = 1

while (Math.abs(xn-previousValue) > epsilon) {
  let temp = xn
  xn = phi(xn)
  previousValue = temp
  n++
}

console.log(xn, n)