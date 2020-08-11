// // // // // const joinStrings = (a:string ,b:string) :string =>{
// // // // //     return a+b;
// // // // // }

// // // // // const add = (a:number,b:number) :number =>{
// // // // //     return a +b;
// // // // // }

// // // // // console.log(joinStrings("The value of 10 + 5"," is"));
// // // // // console.log(add(10,5));

// // // // interface Post {
// // // //     title : string;
// // // //     daysOld : number;
// // // //     published : boolean;
// // // // }

// // // // const post = {
// // // //     title : 'Latest Typescript News',
// // // //     daysOld : 10,
// // // //     published : true
// // // // }

// // // // const printPost = (postToPrint :Post) =>{
// // // //     return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
// // // // };

// // // // console.log(printPost(post));

// // // class Car{
// // //     constructor(public color: string, private year:number){}
// // //     drive(){
        
// // //     }
// // //     private putInGear(){}

// // //     private pressPedal(){}

// // //     private turnWheel(){}
// // // }

// // // const myCar = new Car("yellow",1997);
// // // myCar.drive();

// // const Component = (target: any) => {
// //     console.log(target);
// // };

// // @Component
// // class Car {}

// import { Car } from './Car';

// const myCar = new Car();

interface Driveable {
    speed : number;
    drive(): string;
}

class Car implements Driveable{
    speed = 10;

    drive(){
        return `I am driving at a speed of ${this.speed} km/hr`;
    }
}

const myCar = new Car();
myCar.drive();

const startDriving = (vehicle : Driveable) =>{
    vehicle.drive();
}

startDriving(myCar);