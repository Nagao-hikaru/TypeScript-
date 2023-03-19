let person: {
  name: string,
  age: number,
  sports: string[]
}

person = {
  name: 'aaa',
  age: 22,
  sports: ['soccer', 'baseball', ]
}

for (const sport of person.sports) {
  console.log(sport)
}

console.error(person )