class Department {
  private emp: string[] = []

  constructor(private name: string) {
  }

  describe(this: Department) {
    this.name = 'uu'
    console.log('department' + this.name)
  }

  addEmp(employe: string) {
    this.emp.push(employe)
    console.log(this.emp)
  }
}

class ItDepartment extends Department {

}
