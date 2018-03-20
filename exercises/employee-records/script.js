var employees = [];

function Employee(name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time";
}

employees[0] = new Employee("Wally", "Carnival Ride Kid Scarer", "Heroine", "Part Time");

employees[1] = new Employee("Sally", "Nude Portrait Caricaturist", "$20 and a therapy session per drawing", "Full(frontal) Time");

employees[2] = new Employee("Just Steve", "Standing Person", "$15/hr.");

console.log(employees);