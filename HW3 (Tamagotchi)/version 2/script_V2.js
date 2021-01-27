let progress = 100;
function petProgress(time){
    let elem = document.getElementById("petBar");
    let intervalId = setInterval(frame, 100);

    function frame(){
        if (progress <= 0){
            clearInterval(time)
            petProgressCallBack();
        } else if (progress >= 100){
            progress = 100;
            elem.style.width = progress*4 + 'px';
            elem.innerHTML = progress + '%';
            --progress;
        } else {
            elem.style.width = progress*4 + 'px';
            elem.innerHTML = progress + '%';
            --progress;
        }
    }
}
function feed(){
    progress = progress + 10;
}
function clean(){
    progress = progress + 10;
}
function play(){
    progress = progress + 5;
}
function drink(){
    progress = progress + 15;
}
function call(){
    progress = progress + 3;
}
function scratch(){
    progress = progress + 5;
}

function petProgressCallBack(){
    document.getElementById('petProgress').style.display = 'none'
    document.querySelector('.hidden-block').style.display = 'block'
}
petProgress(10);





