function Employee (EmployeeID, FullName, Department, Level, ImageUrl, Salary) {
    this.name = EmployeeID;
    this.fullName = FullName;
    this.department = Department;
    this.level = Level;
    this.imageUrl = ImageUrl;
    this.salary = Salary;
    this.generateId = generateId();
}

//create Array for depart
const Department = ['IT', 'HR', 'Sales'];
//create Array for level
const Level = ['Junior', 'Mid-Senior', 'Senior'];

//create a new object

const Employee1 = new Employee (generateId(), 'Ghazi Samer', Department[2],Level[0],"image", '$10000');
const Employee2 = new Employee (generateId(), 'Lana Ali', Department[1], Level[2],  "image", '$2000');
const Employee3 = new Employee (generateId(), 'Tamara Ayoub', Department[2], Level[2],"image", '$3000');
const Employee4 = new Employee (generateId(), 'Safi Walid', Department[0], Level[1],"image", '$4000');

console.log(Employee1);
console.log(Employee2);
console.log(Employee3);
console.log(Employee4);





const employees = [Employee1, Employee2, Employee3, Employee4];
console.log(employees);


Employee.prototype.project = function () {
   console.log(`${this.generateId} is working on a project`);
}
Employee1.project();


function generateId() {
    return Math.floor(Math.random() * 10000);
}


let tax = 7.5/100;

function calculateTax(Salary) {
    return Salary * tax;
}

function randomNumber() {
    return Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
}
console.log("Jenior Salary is  " + randomNumber());

function randomNumber1() {
    return Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
}
console.log("Mid-Senior Salary is  " + randomNumber1());

function randomNumber2() {
    return Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500; ;
}
console.log("Senior Salary is  " + randomNumber2());


Employee.prototype.setSalary = function (Salary) {
    this.salary = Salary;
    console.log(`${this.generateId}'s salary is ${this.salary}`);
}
Employee1.setSalary(randomNumber());
Employee2.setSalary(randomNumber1());
Employee3.setSalary(randomNumber2());

console.log("----------------------------------------")


/* document.write("<table><tr><th>ID</th><th>Name</th><th>Department</th><th>Level</th></tr>"); 
 */


Employee.prototype.printTable = function () {
    document.write(`${this.generateId} | ${this.fullName} | ${this.department} | ${this.level}\n <p> `);

    console.log(`${this.generateId} | ${this.fullName} | ${this.department} | ${this.level} `); 
}
for(let i = 0; i < employees.length; i++) {
    employees[i].printTable();
}

/* console.log(document); */

















