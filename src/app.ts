class Department {
  private emp: string[] = []

  constructor(private name: string, tt: string[]) {

    this.name = name 
    this.emp = [...tt]
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
  admins: string[]
  constructor(id: string, admins: string[]) {
    console.log(id)
    console.log(admins)
    super(id, admins)

    this.admins = admins
  }
}

const aae = new ItDepartment('nagao', ['uuu'])

console.log(aae)

aae.describe()
