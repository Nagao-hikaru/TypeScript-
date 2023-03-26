const addNow = (a: number, b: number = 22) => {
  return a + b
}

console.log(addNow(1, 2))

const hobbies = ['sports', 'cooking']

hobbies.push(...hobbies)
console.log(hobbies)