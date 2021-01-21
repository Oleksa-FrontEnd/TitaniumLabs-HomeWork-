let width = 42 ;
//let time = Math.round(time * 1000/100);
function petProgress(time){
    var time = Math.round(time * 1000/100);
    var elem = document.getElementById("petBar");
    let intervalId = setInterval(frame, 10);

    function frame(){
        if (width <= 0){
            clearInterval(time)
            petProgressCallBack();
        } else {
            --width;
            elem.style.width = width + 'px';
            elem.innerHTML = width  + '%';
          }

    }
}

function feed(){
    width = width + 10;
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

function petProgressCallBack(){
    document.getElementById('petProgress').style.display = 'none'
    document.querySelector('.hidden-block').style.display = 'block'
}
petProgress(10);





