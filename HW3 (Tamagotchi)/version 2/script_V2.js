let health = 100;
let satiety = 100;
let joy = 100;  //радость
let purity = 100; //чистота

function cure() {
    health = health + 5;
    document.getElementById("health").innerHTML = health;
}
setInterval(function life (){
    --health;
    document.getElementById("health").innerHTML = health;

    }, 1000)

//progressBar
function move(){
    var elem = document.getElementById('myBar');
    var width = 60;
    var id = setInterval(frame, 50);
    function frame(){
        if (width >= 100){
            clearInterval(id)
        } else{
            width = width + 1;
            elem.style.width = width + '%';
            document.getElementById('label').innerHTML = width + '%';
        }
    }
}
setInterval(function life (){
    --width;
    document.getElementById("width").innerHTML = width;
}, 1000)

