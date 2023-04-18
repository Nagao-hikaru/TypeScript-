interface Greetable {
  readonly age: number;

  greet(phase: string) : void;
}

let user: Greetable;

// user = {
//   name: 'man',
//   age: 30,
//   greet(phase: string) {
//     console.log(phase)
//   }

// }

class Person implements Greetable {
  age: number

  constructor(n: number) {
    this.age = n
  }

  greet(ja: string) {
    console.log(ja)
  }
}

let tt: Greetable

tt = new Person(20)

console.log(tt.age)