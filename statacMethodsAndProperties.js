class Governor {
    constructor(name, residence, keys, office) {
        this.name = name;
        this.residence = residence;
        this.keys = keys;
        this.office = office;
    }
}

const Governor = new Governor('name', 'residence', 'keys', 'office')
console.log(person1)

class deputyGovernor extends  Governor{
    constructor(name, residence, keys, office) {
        super(name, residence, keys, office)
        this.skills = ['Governs', 'City Key', 'Executiv Office']
    }
}

const deputygovernor = new Governor('name', 'residence', 'keys', 'office')
console.log(person1)

class deputyGovernor1 extends Governor {
    constructor(name, residence, keys, office) {
        super(name, residence, keys, office)
        this.skills = ['Governs', 'City Key', 'Executiv Office']
    }
}

const deputygovernor1 = new Governor('name', 'residence', 'keys', 'office')
console.log(person1)

class deputyGovernor extends Governor {
    constructor(name, residence, keys, office) {
        super(name, residence, keys, office)
        this.skills = ['fills in', 'Laws', 'Executiv Office']
    }
}

let Governor = new Governor('John', 'Mansion', 'City Key', 'Executive Office')


console.log(governor);
console.log(deputyGovernor);
console.log(deputygovernor1);



