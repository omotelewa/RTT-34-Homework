class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
        
        }
    getWeight(){
        return this.weight;
    }
    greet() {
        console.log(`Hello, How are you, ${this.name}!`);
    }

    eat(){
        this.weight++;
        this.mood++;
    }

    exercise(){
        this.weight--;
    }

    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10; 
    }

    buyhamster(hamster){
        this.hamsters.push(hamster);
        this.mood =+10;
        this.bankAccount -= hamster.getPrice();
    }
    }
