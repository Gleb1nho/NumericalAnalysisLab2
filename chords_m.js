const PI = Math.PI
const m = 1.57
const epsilon = 0.000005
const f = (x) => { return Math.sin(x) + 0.1 - 2*x*x }
const x0 = 0.6
const fx0 = f(x0)
const calculateNextX = (xn) => { return xn-(f(xn))*(xn-x0)/(f(xn)-fx0) }

let previousX = 0.3
let n = 1

while (Math.abs(f(previousX)) > m*epsilon) {
  previousX = calculateNextX(previousX)
  n++
}

console.log(previousX, n)
