let health = 42;
let satiety = 100;
let joy = 100;  //радость
let purity = 100; //чистота

function cure() {
    if (health < 100){
        health = health + 5;
    } else if(health >= 100){
        health = 100;
        document.getElementById("health").innerHTML = health;
    }
}
let time = setInterval(function life (){
        if (health <= 0){
            health = 'pet died';
            clearInterval(time)
            document.getElementById("health").innerHTML = health;
        } else{
            --health;
            document.getElementById("health").innerHTML = health;
        }
    }, 50)

/*progressBar
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
*/
