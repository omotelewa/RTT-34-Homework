class Person {
    constructor(shirt, pants, shoes) {
        this.shirt = shirt;
        this.pants = pants;
        this.shoes = shoes;
    }
}

const person1 = new Person('Red', 'short', 'nike')
console.log(person1)

class PostalWorker extends Person {
    constructor(shirt, pants, shoes) {
        super(shirt, pants, shoes)
        this.skills = ['Sort Letters', 'Rides Bike', 'Is Fast']
    }
}

const postal1 = new PostalWorker('blue', 'long', 'Puma')
console.log(postal1)

class Chef extends Person {
    constructor(shirt, pants, shoes) {
        super(shirt, pants, shoes)
        this.skills = ['cooks', 'chopps vegetables', 'bakes']
    }
}

const chef1 = new chef('blue', 'long', 'Puma')
console.log(chef1)
