let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b
};
let d = c.apple * 4;
console.log(d);

function squareOf(n: number) {
  return n * n
}

console.log(squareOf(2));
console.log(squareOf(3));
