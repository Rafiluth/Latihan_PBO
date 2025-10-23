class Employee {
    calculateSalary() {
        console.log("gaji pekerja");
    }
}

class FullTimeEmployee extends Employee {
    calculateSalary() {
        const salary = 5000000;
        console.log(`Full time employee menerima gaji tetap sebesar Rp${salary.toLocaleString()}`);
    }
}

class PartTimeEmployee extends Employee {
    constructor(hourlyRate = 50000, hoursWorked = 80) {
        super();
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    calculateSalary() {
        const salary = this.hourlyRate * this.hoursWorked;
        console.log(
            `Part-time employee bekerja ${this.hoursWorked} jam dengan upah Rp${this.hourlyRate.toLocaleString()} per jam.\nTotal gaji: Rp${salary.toLocaleString()}`
        );
    }
}

//const fulltime = new FullTimeEmployee();
//fulltime.calculateSalary();

const parttime = new PartTimeEmployee();
parttime.calculateSalary();