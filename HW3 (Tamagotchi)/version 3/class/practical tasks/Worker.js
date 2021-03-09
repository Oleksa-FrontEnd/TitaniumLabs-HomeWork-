class Worker {
    constructor(name, surname, rate, days) {
        this._name = name.trim().toLowerCase();
        this._surname = surname;
        this._rate = rate;
        this._days = days;

    }
    setRate(rate) {
        this._rate = rate;
    }
    getRate() {
        return this._rate;
    }
    setDays(days){
        this._days = days;
    }
    getDays() {
        return this._days;
    }
    getSalary() {
        return (this._rate * this._days);
    }
}

