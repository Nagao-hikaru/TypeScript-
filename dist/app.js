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
class ItDepartment extends Department {
}
//# sourceMappingURL=app.js.map