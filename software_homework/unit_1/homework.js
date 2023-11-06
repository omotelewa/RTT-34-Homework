class Hamster{
    constructor(name, age){
        this.owner = "";
        this.name = "";
        this.prie = 25;
}

jennySqueak(){
    console.log("Sqeak sqeak");
}
sleepsALot(){
    console.log("sleeps");
}

nibbles(){
    console.log("nibbles food");
}

getPrice(){
    return this.getPrice
}
}
let cuteHamster = new Hamster();
cuteHamster.setName("cutieHamster");
console.log(cuteHamster);



class Person {
    constructor(name) {
        this.name = name;
        this.gender = gender
        this.age = age;
        this.hobby = hobby;
        this.action = action;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName(){
        return this.name;
    }

    getGender(){
        return this.gender;
        
        }
    getAge(){
        return this.Age;
    }
    getHobby() {
        return this.Hobby;
    }

    getAction(){
            return this.Age;
        }
        greeting() {
        console.log(`Hi there!, How is your day, ${this.name}!`);
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
