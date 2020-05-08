const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");


const render = require("./lib/htmlRenderer");
let keepAdding = true;
let employeesArray = [];

let initialQuestions = [
    {
        type: "checkbox",
        message: "What type of employee would you like to add next?",
        name: "typeOfEmployee",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Done Adding"
        ]
    }
]

let engineerQuestions = [
    {
        type: "input",
        message: "What's this Engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What's this Engineer's id?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What's this Engineer's gitHub name?",
        name: "githubName"
    },
    {
        type: "input",
        message: "What's this Engineer's email address?",
        name: "engineerEmail"
    }
]

let internQuestions = [
    {
        type: "input",
        message: "What's this Interns's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What's this Intern's id?",
        name: "internId"
    },
    {
        type: "input",
        message: "What's this Interns's email address?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Where is this Intern going to school?",
        name: "school"
    }
]

let managerQuestions = [
    {
        type: "input",
        message: "What's this Manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What's this Managers's id?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What's this Managers's email address?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What's this Manager's office number?",
        name: "officeNumber"
    }
]


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const promptInitialQuestions = () => {
    return inquirer.prompt(initialQuestions);
}
const promptManagerQuestions = () => {
    return inquirer.prompt(managerQuestions);
}
const promptInternQuestions = () => {
    return inquirer.prompt(internQuestions);
}
const promptEngineerQuestions = () => {
    return inquirer.prompt(engineerQuestions);
}



function newManager(managerData) {
    const manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.officeNumber);
    return manager;
}
function newEngineer(engineerData) {
    const engineer = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.githubName);
    return engineer;
}
function newIntern(internData) {
    const intern = new Intern(internData.internName, internData.internId, internData.internEmail, internData.school);
    return intern;
}

async function initialize() {

    const initialData = await promptInitialQuestions();
    if (initialData.typeOfEmployee[0] === "Manager") {
        const managerData = await promptManagerQuestions();
        employeesArray.push(newManager(managerData));
    }
    if (initialData.typeOfEmployee[0] === "Engineer") {
        const engineerData = await promptEngineerQuestions();
        employeesArray.push(newEngineer(engineerData));
    }
    if (initialData.typeOfEmployee[0] === "Intern") {
        const internData = await promptInternQuestions();
        employeesArray.push(newIntern(internData));
    }
    if (initialData.typeOfEmployee[0] !== "Done Adding") {
        keepAdding = false;
        initialize();
    } else {
        console.log(employeesArray);
        console.log(render(employeesArray));
        fs.writeFileSync("./output/team.html", render(employeesArray));
        const outputPath = path.join(OUTPUT_DIR, "team.html");
    }
}

console.log(`Welcome to the template engine. This program will ask you some questions about your development team and then generate your
employees on an html page.`);
initialize();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above to target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
