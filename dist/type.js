"use strict";
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
const person = {
    name: 'aaa',
    age: 22,
    sports: ['soccer', 'baseball',],
    role: Role.AAA,
};
for (const sport of person.sports) {
    console.log(sport);
}
if (person.role == Role.AAA) {
    console.log('dfd');
}
//# sourceMappingURL=type.js.map