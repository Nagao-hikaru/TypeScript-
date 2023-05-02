type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date

}

type ElevatedEmployee = Admin & Employee

const tt: ElevatedEmployee = {
  name: 'uuu',
  privileges: ['uuuuuu'],
  startDate: new Date()
}

type sss = string | number;

function add(a: sss, b: sss) {
  return a + b;
}