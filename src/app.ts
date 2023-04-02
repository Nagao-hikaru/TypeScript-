class Department {
  name: string

  constructor(n: string) {
    this.name = n
  }

  describe() {
    
  }
}

const accounting = new Department('nagao')

console.log(accounting)
