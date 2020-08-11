export class Car{
    year: number;

    constructor(){
        this.year = 10;
    }
    drive(speed : number){
        console.log(`driving at ${speed} km/hr`)
    }
}

const myCar = new Car();
console.log(myCar.year);
console.log(myCar.drive(30));