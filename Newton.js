const PI = Math.PI
const epsilon = 0.000005
const f = (x) => { return Math.sin(x) + 0.1 - 2*x*x }
const derivative = (x) => { return Math.cos(x) -4*x }
const x0 = 0.6
const calculateNextX = (xn) => { return xn-f(xn)/derivative(xn) }

let xn = calculateNextX(x0)
let previous = x0
let n = 1

while (Math.abs(xn-previous) > epsilon) {
  const temp = xn
  xn = calculateNextX(xn)
  previous = temp
  n++
}

console.log(xn, n)