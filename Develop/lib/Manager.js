// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

const manager1 = new Manager(3, "test@test.org", "office 1");
console.log(manager1);

module.exports = Manager;