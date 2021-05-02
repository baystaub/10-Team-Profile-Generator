const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./Library/Engineer");
const Intern = require("./Library/intern");
const Manager = require("./Library/Manager");


const team = [];

const generateTeam = [{
        type: "input",
        name: "managerName",
        message: "What is the Manager's name?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                return "Please enter the Manager's name to continue.";
            }
        },
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the Manager's employee ID?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                return "Please enter the Manager's ID to continue.";
            }
        },
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the Manager's e-mail?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                return "Please enter the Manager's e-mail to continue.";
            }
        },
    },
    {
        type: "input",
        name: "managerPhone",
        message: "What is the Manager's phone number?",
        validate: (input) => {
            if (input) {
                return true;
            } else {
                return "Please enter the Manager's phone number to continue.";
            }
        },
    },
];

const addNewEmployee = [{
    type: "list",
    name: "empAdd",
    message: "Would you like to add more employees?",
    choices: ["Yes", "No"],
}, ];

const employeeType = [{
    type: "list",
    name: "typeEmp",
    message: "What employee position would you like to add?",
    choices: ["Engineer", "Intern"],
}, ];

const questionEngineer = [{
        type: "input",
        name: "engName",
        message: "What is the Engineer's name?",
    },
    {
        type: "input",
        name: "engId",
        message: "What is the Engineer's ID Number?",
    },
    {
        type: "input",
        name: "engEmail",
        message: "What is the Engineer's e-mail?",
    },
    {
        type: "input",
        name: "engGithub",
        message: "What is the Engineer's GitHub account?",
    },
];
const questionIntern = [{
        type: "input",
        name: "intName",
        message: "What is the Intern's name?",
    },
    {
        type: "input",
        name: "intId",
        message: "What is the Intern's ID Number?",
    },
    {
        type: "input",
        name: "intEmail",
        message: "What is the Intern's e-mail?",
    },
    {
        type: "input",
        name: "intSchool",
        message: "What school does the Intern go to?",
    },
];

function writeToFile(fileName, f) {
    fs.writeFileSync(fileName, f, (error) => {
        error ? console.log(err) : console.log("Your team's profile is ready to view!");
    });
}

function newIntern() {
    inquirer.prompt(questionIntern).then((res) => {
        team.push(new Intern(res.intName, res.intId, res.intEmail, res.intSchool));
        addEmployees();
    });
}

function newEngineer() {
    inquirer.prompt(questionEngineer).then((res) => {
        team.push(
            new Engineer(res.engName, res.engId, res.engEmail, res.engGithub)
        );
        addEmployees();
    });
}

function newEmployee() {
    inquirer.prompt(employeeType).then((res) => {
        console.log(res);
        res.typeEmp === "Engineer" ? newEngineer() : newIntern();
    });
}

function addEmployees() {
    inquirer.prompt(addNewEmployee).then((res) => {
        res.empAdd === "Yes" ? newEmployee() : writeToFile("./generatedIndex.html", teamProfile(team));
    });
}

function init() {
    inquirer.prompt({
            type: "list",
            name: "Check",
            message: "Are you the manager of this project?",
            choices: ["Yes", "No"]
        })
        .then((initial) => {
            if (initial.Check === 'Yes') {
                inquirer.prompt(generateTeam).then((res) => {
                    team.push(
                        new Manager(
                            res.managerName,
                            res.managerId,
                            res.managerEmail,
                            res.managerPhone
                        )
                    );
                    addEmployees();
                });
            } else {
                console.log('please have your manager fill this out');
            }
        })
}

init();





function genEmployees(team) {
    let htmlMain = "";
    team.forEach((obj) => {
        switch (obj.getRole()) {
            case "Engineer":
                let stringDataEng = genEngineer(obj);
                htmlMain += stringDataEng;
                break;
            case "Intern":
                let stringDataInt = genIntern(obj);
                htmlMain += stringDataInt;
                break;
            default:
                return "";
        }
    });
    return htmlMain;
}

function genManager(team) {
    let managerData = "";
    team.forEach((obj) => {
        if (obj.getRole() === "Manager") {
            managerData = `			
		<div class="row center-align">
		<div class="col s12 m4 offset-m4">
			<div class="card teal center-align">
				<div class="card-content black-text">
					<span class="card-title">${obj.getName()}</span>
					<p>${obj.getRole()}</p>
				</div>
				<div class="card-action">
					<a href="#">${obj.getId()}</a>
					<a href="#">${obj.getEmail()}</a>
					<a href="#">${obj.getOfficeNumber()}</a>
				</div>
			</div>
		</div>
		</div>
			`;
        } else {
            return "";
        }
    });
    return managerData;
}

function genEngineer(obj) {
    return `			
  <div class="row center-align">
  <div class="col s12 m4 offset-m4">
	<div class="card teal center-align">
	  <div class="card-content black-text">
		<span class="card-title">${obj.getName()}</span>
		<p>${obj.getRole()}</p>
	  </div>
	  <div class="card-action">
		<a href="#">${obj.getId()}</a>
		<a href="#">${obj.getEmail()}</a>
		<a href="#">${obj.getGithub()}</a>
	  </div>
	</div>
  </div>
  </div>
	`;
}

function genIntern(obj) {
    return `			
  <div class="row center-align">
  <div class="col s12 m4 offset-m4">
	<div class="card teal center-align">
	  <div class="card-content black-text">
		<span class="card-title">${obj.getName()}</span>
		<p>${obj.getRole()}</p>
	  </div>
	  <div class="card-action">
		<a href="#">${obj.getId()}</a>
		<a href="#">${obj.getEmail()}</a>
		<a href="#">${obj.getSchool()}</a>
	  </div>
	</div>
  </div>
  </div>
`;
}

function teamProfile(team) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<title>Team</title>
</head>
<body>
<nav>
<div class="nav-wrapper blue-grey lighten-2">
  <a class="brand-logo center black-text">My Team</a>
  <ul id="nav-mobile" class="left hide-on-med-and-down">
  </ul>
</div>
</nav>
<div class="row center-align">
${genManager(team)}
</div>
<div class="row center-align">
${genEmployees(team)}
</div>
</body>
</html>
`;
}