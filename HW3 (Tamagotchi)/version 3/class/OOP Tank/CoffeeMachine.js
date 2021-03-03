class CoffeeMachine {
    _waterAmount = 0;

    setWaterAmount (value) {
        if (value < 0) throw new Error("Отрицательное количество воды");
        this._waterAmount = value; // количество воды внутри
    }
    getWaterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }
    get power() {
        return this._power;
    }
}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);
alert( `Мощность: ${coffeeMachine.power}W`); //Мощность 100W

// устанавливаем количество воды
coffeeMachine.waterAmount = 10; // Error: Отрицательное количество воды