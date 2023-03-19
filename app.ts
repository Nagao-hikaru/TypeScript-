type combinable = number | string

function combine(input1: combinable, input2: combinable) {
  return input1
}

const combinedAges = combine(30, 26) 
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
