class Animal {
    constructor(animalName, kind, age){
        this._animalName = animalName;
        this._kind = kind;
        this.age = age;
    }
    validateKind(){
        if (this._kind.length > 2){
            return true;
        }
        return false;
    }
}