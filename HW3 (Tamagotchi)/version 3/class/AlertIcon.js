class AlertIcon extends Alert{
    constructor(a, c, d, icon) {
        super(a, c, d);
        this.icon = icon;
    }
    showIconAlert(){
        document.querySelector(this.out).innerHTML = `<p class='${this.cssClass}'><span class='material-icons'>${this.icon}</span>${this.message}</p>`;
    }
    myAlert(){
        alert('Hi!!!' + this.message);
    }
}