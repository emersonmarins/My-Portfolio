let radius = 240;
let autoRotate = true;
let rotateSpeed =  120;
let imgWidth = 120;
let imgHeight = 170;

//-------------Começar----------------//
 setTimeout(init,1000);

 let arrastar_El = document.querySelector('.container-arrastar');
 let rodar_El = document.querySelector('.container-rodar');
 let img_El = [...document.querySelectorAll('.container-rodar > img')];
 let chao_El = document.querySelector('#chao');

rodar_El.style.cssTesxt = `width: ${imgWidth}px; height: ${imgHeight}px;`;
chao_El.style.cssTesxt = `width: ${radius * 3}px; height: ${radius * 3}px;`;

function init(delayTime) {
    for (let index = 0; index < img_El.length; index++) {
        img_El[index].style.transform = `rotateY(${(index * (360 / img_El.length))}deg) translateZ(${radius}px) `;
        img_El[index].style.transition = "transform 1s";
        img_El[index].style.transitionDelay = `${delayTime || (img_El.length - index) / 4}s` ; 
            
        
    }
}

function applyTransform (obj) {
    if (tY > 180) tY = 180; 
    if (tY < 0) tY = 0; 
    
    obj.style.transform = `rotateX(${(-tY)}deg) rotateY(${(tX)}deg)`;
}

function playRodar(yes) {
    rodar_El.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
desY = 0,
tX = 0,
tY = 10;

if (autoRotate) {
    let animationName = (rotateSpeed > 0 ? 'rodar' : 'rodarReverter');
    rodar_El.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

document.onpointerdown = function (e) {
    clearInterval(arrastar_El.timer);
    e = e || window.event;
    let sX = e.clientX,
        sY = e.clientY;
    
    this.onpointermove = function (e) {
        e = e || window.event;
        let nX = e.clientX,
            nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(arrastar_El);
        sX = nX;
        sY = nY;
    };

    this.onpointerup = function (e) {
        arrastar_El.timer = setInterval(function () {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTransform(arrastar_El);
            playRodar(false);
            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                clearInterval(arrastar_El.timer);
                playRodar(true)
            } 
        }, 17);
        this.onpointermove = this.onpointerup = null;
    }
    return false
}