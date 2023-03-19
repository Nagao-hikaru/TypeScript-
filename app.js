// let person: {
//   name: string,
//   age: number,
//   sports: string[]
//   role: [number, string]
//   //tuple型
// }
// person = {
//   name: 'aaa',
//   age: 22,
//   sports: ['soccer', 'baseball', ],
//   role: [2, 'nagao '],
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ"] = 1] = "READ";
    Role[Role["AAA"] = 2] = "AAA";
})(Role || (Role = {}));
var person = {
    name: 'aaa',
    age: 22,
    sports: ['soccer', 'baseball',],
    role: Role.AAA
};
for (var _i = 0, _a = person.sports; _i < _a.length; _i++) {
    var sport = _a[_i];
    console.log(sport);
}
if (person.role == Role.AAA) {
    console.log('dfd');
}
