Employee.prototype.card = function () {
    document.write(`<div class="card">
    <div class="card-body">
        
        <h5 class="card-title">${this.fullName}</h5>
        <p class="card-text">${this.department}</p>
        <p class="card-text">${this.level}</p>
        <p class="card-text">${this.salary}</p>
        <img src="${this.imageUrl}">
       
    </div>
</div>`);
}
for(let i = 0; i < employees.length; i++) {
    employees[i].card();
}