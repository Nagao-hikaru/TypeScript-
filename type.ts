// let person: {
//   name: string,
//   age: number,
//   sports: string[]
//   role: [number, string]
//   //tuple型
// }

// person = {
//   name: 'aaa',
//   age: 22,
//   sports: ['soccer', 'baseball', ],
//   role: [2, 'nagao '],
// }

enum Role {
  ADMIN, READ, AAA
}

const person = {
  name: 'aaa',
  age: 22,
  sports: ['soccer', 'baseball', ],
  role: Role.AAA,
}

for (const sport of person.sports) {
  console.log(sport)
}

if (person.role == Role.AAA) {
  console.log('dfd')
}