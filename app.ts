function add(n1: number, n2: number): number {
  return n1 + n2
}

function printResulet(n1: number): void {
  console.log(n1)
}

let aaa: (type1: number, type2: number) => number

aaa = add
printResulet(add(5, 10))