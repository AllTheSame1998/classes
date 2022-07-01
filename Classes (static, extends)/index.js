//Создайте класс Работника. У каждого объекта обязательно должно быть свойства id, имя, категория и зарплата за месяц.

class Worker{
    static countWorker=0;
    static countSalary=[];
    static workerList = [];
    static id = 1000;
    constructor(name,category,salary=0){
        this.id=Worker.id;
        this.name=name;
        this.category=category;
        this.salary=salary;
        Worker.countWorker++
        Worker.id++
        Worker.countSalary.push(this.salary)
        Worker.workerList.push(this.name)
    }
    infoSalary(){
        return `Зарплата рабочего : ${this.salary}`
    }

    yearSalary(){
        let salaryWorker = this.salary
        return `Зарплата рабочего за год : ${salaryWorker*=12}`
    }

    outCountWorkers(){
        return `Кол-во работников ${Worker.countWorker}`
    }

    yearSalaryAllWorkers(){
        let salaryWorkers = Worker.countSalary.reduce((a,b) => a+b);
        return `За год на зарплату работникам уходит : ${salaryWorkers*12}`
    }

}

console.group('__________________________')
const worker1 = new Worker('Mat','batrak',1000)
let worker2 = new Worker('John','Prorab',1500)
console.log(worker1)
console.log(worker1.infoSalary());
console.log(worker1.yearSalary())
console.log(worker1.outCountWorkers())
console.log(worker1.yearSalaryAllWorkers())
console.groupEnd

class HourlyWorker extends Worker{
    static  countNewWorker = 0
    constructor(name,category,daySalary,hoursWorked){
        super(name,category);
        this.daySalary= daySalary;
        this.hoursWorked=hoursWorked;
        HourlyWorker.countNewWorker++
    }

    everyDaySalary(){
        let salaryDay = this.daySalary;
        return `В день получает ${salaryDay*this.hoursWorked}`
    }

    monthSalary(){
        let monthMoney = salaryDay*this.hoursWorked*22;
        return `Зарплата в месяц : ${monthMoney}`
    }

    countHourlyWorker(){
        return `Количество почасовых работников :${HourlyWorker.countNewWorker}`
    }

}

let newWorker1 = new HourlyWorker('Dodik','lopata',3,10);
console.group('________________')
console.log(newWorker1.everyDaySalary);
console.log(newWorker1.monthSalary);
console.log(newWorker1.countHourlyWorker)