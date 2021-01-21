let petBar = 42;
let time = Math.round(time * 1000/100);
function petProgress(time){
    //var time = Math.round(time * 1000/100);
    let intervalId = setInterval(function (){
        if (petBar <= 0){
            petBar = 'pet died';
            clearInterval(time)
            document.getElementById("petBar").innerHTML = petBar;
            petProgressCallBack();
        } else {
            petBar = petBar - 1;
            petBar.style.width = petBar + '%';
            document.getElementById("petBar").innerHTML = petBar + '%';
        }
    }, time)
}

function feed(){
    petBar = petBar.value + 20;
}
function clean(){
    petBar = petBar.value + 10;
}
function play(){
    petBar = petBar.value + 5;
}
function drink(){
    petBar = petBar.value + 15;
}
function call(){
    petBar = petBar.value + 3;
}
function scratch(){
    petBar = petBar.value + 5;
}

function userProgressCallBack(){
    document.querySelector('.hidden-block').style.display = 'block'
}
petProgress(10);

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




