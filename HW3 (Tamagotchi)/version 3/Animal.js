class Animal {
    constructor(animalName, kind, age){
        this.animalName = animalName;
        this.kind = kind;
        this.age = age;
    }
    validateKind(){
        if (this.kind.length > 2){
            return true;
        }
        return false;
    }
}