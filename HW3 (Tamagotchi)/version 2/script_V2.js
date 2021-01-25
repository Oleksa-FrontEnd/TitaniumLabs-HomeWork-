let width = 100;
function petProgress(time){
    let elem = document.getElementById("petBar");
    let intervalId = setInterval(frame, 100);

    function frame(){
        if (width <= 0){
            clearInterval(time)
            petProgressCallBack();
        } else if (width >= 100){
            width = 100;
            elem.style.width = width*4 + 'px';
            elem.innerHTML = width + '%';
            --width;
        } else {
            elem.style.width = width*4 + 'px';
            elem.innerHTML = width + '%';
            --width;
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





