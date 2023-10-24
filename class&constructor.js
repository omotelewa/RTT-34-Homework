class Cat{
        constructor(name, age, color, breed){
            this.name = name;
            this.age = age;
            this.color = color;
            this.breed = breed;
    }
        
    cuteCat(){
        return `So cute, your ${this.breed} is very adorable`;
    }

    fluffyCat(){
        return `Soft and adorable, ${this.hair} feels so soft`;
        
    }

    playful(){
        return  `As playful as a bunny, ${this.pet} so very playful`;
               
        }
}
   let cat = new Cat("Mittens", "1", "butterschotch", "Saimese");

console.log(cat.name); //return 
console.log(cat.age);
console.log(cat.color);
console.log(cat.breed);



//Sedond section of the questions for Pirate



class Pirate{
    constructor(name, eyes, ship, gender){
        this.name = name;
        this.profession = profession;
        this.ship = ship;
        this.voyage = voyage;
    }
            
popular(){
    return `Jeff, this name ${this.name} is very popular`;
}

dangerous(){
    return `Sea pirate, ${this.profession} very dangerous`;
    
}

voyageType(){
    return  `He goes on dangerous voyage , ${this.voyage} very long and risky`;
           
    }
}
let pirate = new Pirate("Jeff", "Pirate", "Voyage of the Seas", "Very Risky");

console.log(this.name); //return 
console.log(this.profession);
console.log(this.ship);
console.log(this.voyage);

  
