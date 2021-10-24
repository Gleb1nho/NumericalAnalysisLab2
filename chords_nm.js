const PI = Math.PI
const epsilon = 0.000005
const m = 1.57
const f = (x) => { return Math.sin(x) + 0.1 - 2*x*x }
const x0 = 0.6
const fx0 = f(x0)
const calculateNextX = (xn, xn1) => { return xn-(f(xn))*(xn-xn1)/(f(xn)-f(xn1)) }

let xn = 0.3
let xn1 = x0 // xn-1
let n = 1

while (Math.abs(f(xn)) > m*epsilon) {
  const temp = xn
  xn = calculateNextX(xn, xn1)
  xn1 = temp
  n++
}

console.log(xn, n)