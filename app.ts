let person: {
  name: string,
  age: number,
  sports: string[]
  role: [number, string]
  //tuple型
}

person = {
  name: 'aaa',
  age: 22,
  sports: ['soccer', 'baseball', ],
  role: [2, 'nagao '],
}

for (const sport of person.sports) {
  console.log(sport)
}

console.error(person )