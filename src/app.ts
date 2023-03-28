const addNow = (a: number, b: number = 22) => {
  return a + b
}

console.log(addNow(1, 2))

const hobbies = ['sports', 'cooking']

hobbies.push(...hobbies)
// スプレッド演算子
console.log(hobbies)

const uu = (...numbers: number[]) => {
  return numbers.reduce((result, value) => {
    return result + value
  }, 0);
}

console.log(uu(1, 2, 3, 4))