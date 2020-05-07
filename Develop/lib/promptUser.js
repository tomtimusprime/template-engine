const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
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

const initialData = await promptInitialQuestions();
const managerData = await promptManagerQuestions();
const internData = await promptInternQuestions();
const engineerData = await promptEngineerQuestions();
let keepAdding = true;

function newManager (managerData) {
    const manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.officeNumber);
    return manager;
}
function newEngineer (engineerData) {
    const engineer = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.githubName);
    return engineer;
}
function newIntern (internData) {
    const intern = new Intern(internData.internName, internData.internId, internData.internEmail, internData.school);
    return intern;
}

while(keepAdding) {
    promptInitialQuestions();
    if(initialData.typeOfEmployee === "Done Adding") {
        keepAdding = false;
    } else {
        if(initialData.typeOfEmployee === "Manager") {
            promptManagerQuestions();
            newManager(managerData);
        }
        else if(initialData.typeOfEmployee === "Engineer") {
            promptEngineerQuestions();
            newEngineer(engineerData);
        }
        else {
            promptInternQuestions();
            newIntern(internData);
        }
    }
}

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
        type:"input",
        message:"What's this Engineer's name?",
        name: "engineerName"
    },
    {
        type:"input",
        message:"What's this Engineer's id?",
        name: "engineerId"
    },
    {
        type:"input",
        message:"What's this Engineer's gitHub name?",
        name: "githubName"
    },
    {
        type:"input",
        message:"What's this Engineer's email address?",
        name: "engineerEmail"
    }
]

let internQuestions = [
    {
        type:"input",
        message:"What's this Interns's name?",
        name: "internName"
    },
    {
        type:"input",
        message:"What's this Intern's id?",
        name: "internId"
    },
    {
        type:"input",
        message:"What's this Interns's email address?",
        name: "engineerEmail"
    },
    {
        type:"input",
        message:"Where is this Intern going to school?",
        name: "school"
    }
]

let managerQuestions = [
    {
        type:"input",
        message:"What's this Manager's name?",
        name: "managerName"
    },
    {
        type:"input",
        message:"What's this Managers's id?",
        name: "managerId"
    },
    {
        type:"input",
        message:"What's this Managers's email address?",
        name: "managerEmail"
    },
    {
        type:"input",
        message:"What's this Manager's office number?",
        name: "officeNumber"
    }
]
    

