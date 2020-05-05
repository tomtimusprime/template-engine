const inquirer = require("inquirer");
const Employee = require("./Employee");
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
const engineerData = await promptManagerQuestions();
let keepAdding = true;

while(keepAdding) {
    if(initialQuestions.typeOfEmployee === "Done Adding") {
        keepAdding = false;
    }
    if(initialData.typeOfEmployee === "Manager") {
        
    } 
    else if () {
    
    }
    else if() {
    
    }
}


let initialQuestions = [
    {
        type: "input",
        message: "How many employees do you have on your development team?",
        name: "numberEmployees"
    },
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

]

let managerQuestions = [

]
    {
        type: "input",
        message: "Enter a project description.",
        name: "description"
    },
    {
        type: "input",
        message: "How will you install your program?",
        name: "installation"
    },
    {
        type: "input",
        message: "How are you going to use this project?",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "What type of licensing are you using for this project?",
        name: "licensing",
        choices: [
            "None",
            "MIT",
            "APACHE_2.0",
            "GPL_3.0",
            "BSD3",
            "Other"
        ]
    },
    {
        type: "input",
        message: "Authors?",
        name: "authors"
    },
    {
        type: "input",
        message: "How can others contribute?",
        name: "contributors"
    },
    {
        type: "input",
        message: "Tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "Questions?",
        name: "questions"
    },
    {
        type: "input",
        message: "Where should the user report issues?",
        name: "reporting"
    }
]