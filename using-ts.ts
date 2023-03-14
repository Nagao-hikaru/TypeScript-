const button = document.querySelector('button')
const input = document.getElementById('num')! as HTMLInputElement

function add (num1, num2) {
  return num1
}

button?.addEventListener('click', function () {
  console.log(add(input.value, 'ddd'))
})