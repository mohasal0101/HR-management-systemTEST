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

const Employee1 = new Employee (generateId(), 'Ghazi Samer', Department[2],Level[0],"image1", '$10000');
const Employee2 = new Employee (generateId(), 'Lana Ali', Department[1], Level[2],  "image2", '$2000');
const Employee3 = new Employee (generateId(), 'Tamara Ayoub', Department[2], Level[2],"image3", '$3000');
const Employee4 = new Employee (generateId(), 'Safi Walid', Department[0], Level[1],"image4", '$4000');
const Employee5 = new Employee (generateId(), 'Rana Saleh', Department[0], Level[1],"image5", '$5000');
const Employee6 = new Employee (generateId(), 'Hadi Ahmad', Department[0], Level[1],"image6", '$6000');


console.log(Employee1);
console.log(Employee2);
console.log(Employee3);
console.log(Employee4);
console.log(Employee5);
console.log(Employee6);






const employees = [Employee1, Employee2, Employee3, Employee4, Employee5, Employee6];
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
Employee4.setSalary(randomNumber());
Employee5.setSalary(randomNumber1());
Employee6.setSalary(randomNumber2());


console.log("----------------------------------------")


/* document.write("<table><tr><th>ID</th><th>Name</th><th>Department</th><th>Level</th></tr>"); 
 */


/* Employee.prototype.printTable = function () {
    document.write(`${this.generateId} | ${this.fullName} | ${this.department} | ${this.level}\n <p> `);

    console.log(`${this.generateId} | ${this.fullName} | ${this.department} | ${this.level} `); 
}
for(let i = 0; i < employees.length; i++) {
    employees[i].printTable();
} */




Employee.prototype.card = function () {
    document.write(`<div class="card">
    <div class="card-body">
        <h5 class="card-title">${this.fullName}</h5>
        <p class="card-text">${this.department}</p>
        <p class="card-text">${this.level}</p>
        <p class="card-text">${this.salary}</p>
        <img src="${this.imageUrl}" alt="">
    </div>
</div>`);
}
for(let i = 0; i < employees.length; i++) {
    employees[i].card();
}

document.getElementById("card").appendChild(card);

// create styling for the card
const card = document.createElement('style');
card.innerHTML = `
.card {
    border: 1px solid #eaeaea;
    border-radius: 3px;
    background-color: #f2f2f2;
    padding: 20px;
    margin: 10px 0;
}
.card-title {
    font-size: 1.3rem;
}
.card-text {
    font-size: 1.1rem;
}
.card-body {
    padding: 0.5rem;
}
.card-img {
    width: 100%;
    height: auto;
}
`;
document.getElementById("card").appendChild(card);



 














