let progressElement = document.getElementById('user-progress');
let start = 100;

function userProgress(time){
    var time = Math.round(time * 1000/100);
    let intervalId = setInterval(function (){
        if (start < 0){
            clearInterval(intervalId);
            userProgressCallBack();
        } else {
            progressElement.value = start;
            start = start - 0.2;
        }
    }, time)

}

function feed(){
    start = progressElement.value + 20;
}
function clean(){
    start = progressElement.value + 10;
}
function play(){
    start = progressElement.value + 5;
}
function drink(){
    start = progressElement.value + 15;
}
function call(){
    start = progressElement.value + 3;
}
function scratch(){
    start = progressElement.value + 5;
}

function userProgressCallBack(){
    document.querySelector('.hidden-block').style.display = 'block'
}
userProgress(10);

/*
let health = 42;
let satiety = 100;//сытость
let joy = 100;  //радость
let purity = 100; //чистота
*/
/*ProgressBar*/
/*
let time2 = setInterval(function life (){
    if (health <= 0){
        health = 'pet died';
        clearInterval(time)
        document.getElementById("health").innerHTML = health;
    } else{
        --health;
        var elem = document.getElementById('health');
        elem.style.health = health + '%';
        document.getElementById("health").innerHTML = health + '%';
    }
}, 500)

function move(){
    var elem = document.getElementById('myBar');
    var width = 42;
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
*/
/*Health*/
/*
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
            var elem = document.getElementById('health');
            elem.style.healtth = health + '%';
            document.getElementById("health").innerHTML = health + '%';


        }
    }, 100)
*/



