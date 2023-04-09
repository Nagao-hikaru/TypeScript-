"use strict";
class Department {
    constructor(name, tt) {
        this.name = name;
        this.emp = [];
        this.name = name;
        this.emp = [...tt];
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
class ItDepartment extends Department {
    constructor(id, admins) {
        console.log(id);
        console.log(admins);
        super(id, admins);
        this.admins = admins;
    }
}
const aae = new ItDepartment('nagao', ['uuu']);
console.log(aae);
aae.describe();
//# sourceMappingURL=app.js.map