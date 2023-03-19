var person;
person = {
    name: 'aaa',
    age: 22,
    sports: ['soccer', 'baseball',]
};
for (var _i = 0, _a = person.sports; _i < _a.length; _i++) {
    var sport = _a[_i];
    console.log(sport);
    debugger;
}
console.error(person);
