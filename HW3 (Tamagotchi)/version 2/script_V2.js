let width = 100;
function petProgress(time){
    let elem = document.getElementById("petBar");
    let intervalId = setInterval(frame, 100);

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
    width = width + 10;
}
function play(){
    width = width + 5;
}
function drink(){
    width = width + 15;
}
function call(){
    width = width + 3;
}
function scratch(){
    width = width + 5;
}

function petProgressCallBack(){
    document.getElementById('petProgress').style.display = 'none'
    document.querySelector('.hidden-block').style.display = 'block'
}
petProgress(10);





