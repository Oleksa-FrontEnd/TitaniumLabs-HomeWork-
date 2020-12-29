let hunger = 100;
let hygiene = 100;
let sleep = 100;
let mood = 100;
let talk = 100;
let drink = 100;

function Loop(time = 2) {
    let total = hunger + hygiene + sleep + mood + talk + drink;

    if (hunger <= 0 || hygiene <= 0 || sleep <= 0 || mood <= 0 || talk <= 0 || drink <= 0) {
        document.getElementById('pet').src="images/preto.jpg";
        document.getElementById('mensagem').innerHTML = "Pet  - kaput((((";
    } else if( total > 400) {
        document.getElementById('pet').src="images/azul.jpg";
    } else if( total > 300) {
        document.getElementById('pet').src="images/verde.jpg";
    } else if( total > 200) {
        document.getElementById('pet').src="images/cinza.jpg";
    } else if( total > 100) {
        document.getElementById('pet').src="images/amarelo.jpg";
    } else if( total > 50) {
        document.getElementById('pet').src="images/vermelho.jpg";
    }

    hunger = hunger - parseInt(time);
    hygiene = hygiene - parseInt(time);
    sleep = sleep - parseInt(time);
    mood = mood - parseInt(time);
    talk = talk - parseInt(time);
    drink = drink - parseInt(time);

    document.getElementById('hunger').style.width = hunger + 'px';
    document.getElementById('hygiene').style.width = hygiene + 'px';
    document.getElementById('sleep').style.width = sleep + 'px';
    document.getElementById('mood').style.width = mood + 'px';
    document.getElementById('talk').style.width = talk + 'px';
    document.getElementById('drink').style.width = drink + 'px';

    document.getElementById('hunger').innerHTML = hunger + '%';
    document.getElementById('hygiene').innerHTML = hygiene + '%';
    document.getElementById('sleep').innerHTML = sleep + '%';
    document.getElementById('mood').innerHTML = mood + '%';
    document.getElementById('talk').innerHTML = talk + '%';
    document.getElementById('drink').innerHTML = drink + '%';
}

function Start(){
    var temporizador = setInterval(Loop, 1000);
}
function Feed() {
    hunger = 100;
    document.getElementById('hunger').innerHTML = hunger + '%';
    document.getElementById('hunger').style.width = hunger + 'px';
}
function Cleaning() {
    hygiene = 100;
    document.getElementById('hygiene').innerHTML = hygiene + '%';
    document.getElementById('hygiene').style.width = hygiene + 'px';
}
function Sleep() {
    sleep = 100;
    document.getElementById('sleep').innerHTML = sleep + '%';
    document.getElementById('sleep').style.width = sleep + 'px';
}
function Play() {
    mood = 100;
    document.getElementById('mood').innerHTML = mood + '%';
    document.getElementById('mood').style.width = mood + 'px';
}
function Talk() {
    talk = 100;
    document.getElementById('talk').innerHTML = talk + '%';
    document.getElementById('talk').style.width = talk + 'px';
}
function Drink() {
    drink = 100;
    document.getElementById('drink').innerHTML = drink + '%';
    document.getElementById('drink').style.width = drink + 'px';
}
Start();