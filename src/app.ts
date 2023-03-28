class Department {
  name: string

  constructor(n: string) {
    this.name = n
  }
}

const accounting = new Department('nagao')

console.log(accounting)
