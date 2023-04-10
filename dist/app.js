"use strict";
class Department {
    static createEmp(name) {
        return name + 'sann';
    }
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
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error('repo-toganai');
        }
    }
    set mostRecentReport(text) {
        this.addReport(text);
    }
    constructor(id, admins) {
        console.log(id);
        console.log(admins);
        super(id, admins);
        this.lastReport = 'hikaru';
        this.admins = admins;
    }
    describe() {
        return 'yayayayay';
    }
    addReport(text) {
        this.lastReport = text;
    }
}
console.log(Department.createEmp('yama'));
const aae = new ItDepartment('nagao', ['uuu']);
console.log(aae);
// console.log(Math.pow)
aae.mostRecentReport = 'nagaohikaru';
console.log(aae.mostRecentReport);
// aae.addReport('uuuasfadsf ')
//# sourceMappingURL=app.js.map