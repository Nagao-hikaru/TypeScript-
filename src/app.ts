class Department {
  private emp: string[] = []

  static createEmp(name: string) {
    return name + 'sann'
  }

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
  private lastReport: string

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    } else {
      throw new Error('repo-toganai')
    }
  }

  set mostRecentReport(text: string) {
    this.addReport(text)
  }

  constructor(id: string, admins: string[]) {
    console.log(id)
    console.log(admins)
    super(id, admins)
    this.lastReport = 'hikaru'

    this.admins = admins
  }

  addReport(text: string) {
    this.lastReport = text
  }


}

console.log(Department.createEmp('yama'))

const aae = new ItDepartment('nagao', ['uuu'])

console.log(aae)
// console.log(Math.pow)

aae.mostRecentReport = 'nagaohikaru'
console.log(aae.mostRecentReport)
// aae.addReport('uuuasfadsf ')

