"use strict";
class Department {
    constructor(name) {
        this.name = name;
        this.emp = [];
    }
    describe() {
        this.name = 'uu';
        console.log('department' + this.name);
    }
    addEmp(employe) {
        this.emp.push(employe);
        console.log(this.emp);
    }
}
const accounting = new Department('nagao');
console.log(accounting.addEmp('uu'));
//# sourceMappingURL=app.js.map