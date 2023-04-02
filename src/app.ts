class Department {
  name: string
  private emp: string[] = []

  constructor(n: string) {
    this.name = n
  }

  describe(this: Department) {
    console.log('department' + this.name)
  }

  addEmp(employe: string) {
    this.emp.push(employe)
    console.log(this.emp)
  }
}

const accounting = new Department('nagao')



console.log(accounting.addEmp('uu'))
