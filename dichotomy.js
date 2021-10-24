const f = (x) => { return Math.sin(x) + 0.1 - 2*x*x }
const n = 16

let segment = {
  a: 0.3, 
  b: 0.6
}
let result = (segment.a + segment.b)/2

for (let i=0; i < n; i++) {
  const fa = f(segment.a)
  const fres = f(result)

  fa * fres < 0 ? segment.b = result : segment.a = result
  result = (segment.a + segment.b)/2
}

console.log(`Корень с заданной точностью равен: ${result} `)
