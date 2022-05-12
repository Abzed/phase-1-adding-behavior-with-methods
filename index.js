class Cat{
    constructor(name, gender){
        this.name = name,
        this.gender = gender
    }
    speak(){
        return `${this.name} says meow!`
    }
}

const cat = new Cat("Sasha", "female")



class Dog{
    constructor(name, gender){
        this.name = name,
        this.gender = gender
    }
    speak(){
        return `${this.name} says woof!`
    }
}

const dog = new Dog("Rufio", "male")
 


class Bird{
    constructor(name, gender){
        this.name = name,
        this.gender = gender
    }
    speak(){
        if (this.name == 'Pablo'){
            return `It's me! ${this.name}, the parrot!`
        }else{
            // console.log(`It's me! ${this.name}, the parrot!`);
            // console.log(`${this.name} says squawk!`);
            return `${this.name} says squawk!`
        }
    }
}

const bird = new Bird("Pablo", "male")
const bird2 = new Bird("Mable", "female")