class Worker {
    constructor() {
    }
    set name(name) {
      this._name = name.trim().toLowerCase();
    }
    get name() {
        return this._name;
    }
    getSurname(surname) {
        this.surname = surname;
    }
    getRate(rate) {
        this.rate = rate;
    }
    getDays(days) {
        this.days = days;
    }

    getSalary() {
        return (this.rate * this.days);
    }
}
