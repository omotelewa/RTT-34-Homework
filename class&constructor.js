class cat{
        constructor(name, age, color, breed){
            this.name = name;
            this.age == age;
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
   
      
