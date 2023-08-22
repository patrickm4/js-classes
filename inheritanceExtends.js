class Person {
    constructor (_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe () {
        console.log(`I am ${this.name} and I am ${this.age} years old`)
    }
}

class Programmer extends Person {
    constructor (_name, _age, _yearsOfExperience) {
        super(_name, _age);

        // Custom behaviour
        this.yearsOfExperience = _yearsOfExperience
    }

    code () {
        console.log(`${this.name} is coding`)
    }
}

let person1 = new Person("Jeff", 45)
let programmer1 = new Programmer("Dom", 56, 12)

// console.log(person1)
// console.log(programmer1)

// programmer1.code()
// programmer1.describe()

const programmers = [
    new Programmer("Tim", 56, 12),
    new Programmer("Jim", 24, 4)
]

function developSoftware (programmers) {
    //Develop Software

    for (let programmer of programmers) {
        programmer.code()
    }
}

developSoftware(programmers)