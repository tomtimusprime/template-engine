// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }

}

const intern1 = new Intern(2, "test@test.com", "BYU");
console.log(intern1);

module.exports = Intern;
