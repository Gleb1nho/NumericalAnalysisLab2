const PI = Math.PI
const epsilon = 0.000005
const f = (x) => { return Math.sin(x) + 0.1 - 2*x*x }
const derivative = (x) => { return Math.cos(x) - 4*x }
const derivative2 = (x) => { return -(Math.sin(x))-4 }
const M = 4.3
const m = 1.57
const x0 = 0.6
const calculateNextX = (xn) => { 
  return xn+(derivative(xn)+Math.sqrt(derivative(xn)*derivative(xn)+2*M*f(xn)))/M
}

let xn = calculateNextX(x0)
let previousValue = x0
let n = 1

while ((M/m)*(xn-previousValue)*(xn-previousValue) >= epsilon) {
  let temp = xn
  xn = calculateNextX(xn)
  previousValue = temp
  n++
}

console.log(xn, n)
