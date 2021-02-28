class Tank {
    constructor(ammunition) {
        this.ammunition = ammunition;
    }
    fireTo() {
        if (this._canFire())
        this.ammunition = this.ammunition - 1;
    }
    _canFire (ammunition){
        if (ammunition > 0) {
            return true;
        } else {
            return false;
        }
    }
}