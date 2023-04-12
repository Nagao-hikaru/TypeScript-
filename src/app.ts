interface Person {
  name: string;
  age: number;

  greet(phase: string) : void;
}

let user: Person;

user = {
  name: 'man',
  age: 30,
  greet(phase: string) {
    console.log(phase)
  }

}