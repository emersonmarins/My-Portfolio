window.screen.height
console.log(window.screen.width)
let radius = 240;
let autoRotate = true;
let rotateSpeed =  120;
let imgWidth = 130;
let imgHeight = 170;

//-------------Começar----------------//
setTimeout(init,100);

let arrastar_El = document.querySelector('.container-arrastar');
let rodar_El = document.querySelector('.container-rodar');
let img_El = [...document.querySelectorAll('.container-rodar > img')];
let chao_El = document.querySelector('#chao');

if (window.screen.width < 700) {
    radius = 140;
    for (let index = 0; index <= 1; index++) {
        img_El[index].remove();
        
    }
    img_El = rodar_El.children;
    img_El = [...img_El];
    console.log(rodar_El.children)
}else {
    radius = 240
}
rodar_El.style.cssText = `width: ${imgWidth}px; height: ${imgHeight}px;`;
chao_El.style.cssText = `width: ${radius * 3}px; height: ${radius * 3}px;`;

function init(delayTime) {
    for (let index = 0; index < img_El.length; index++) {
        if (radius < 150) radius = 150;
        if (radius > 400) radius = 400;
        // img_El[index].style.transform = `rotateY(${(180)}deg) rotateX(-30deg) translateX(${(index * imgWidth)* 1.1}px) `;
        img_El[index].style.transition = "transform 1s";
        img_El[index].style.transitionDelay = `${delayTime || (img_El.length - index) / 4}s` ; 
        // console.log(delayTime);
        
    }
}

function applyTransform (obj) {
    // Limita o eixo Y entre 0 a 180 graus, para não ficar dando voltas em torno de si mesmo
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
    let animationName = (rotateSpeed > 0 ? 'roda' : 'rodarReverter');
    rodar_El.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// Pega as cordenadas do eixo X e Y no momento em que se clica no carousel 
document.onpointerdown = function (e) {
    clearInterval(arrastar_El.timer);
    e = e || window.event;
    let sX = e.clientX,
        sY = e.clientY; 
        
        // Pega as cordenadas do eixo X e Y no momento em que se arrasta o mouse no carousel 
        this.onpointermove = function (e) {
            
            e = e || window.event;
            let nX = e.clientX,
            nY = e.clientY;
            
            //Subtrai as cordenadas de entrada com as de deslocamento, obtendo assim
            //as cordenadas a parti do 0 - 1 - 2 - 3 - 4 etc 
            desY = nY - sY;
            desX = nX - sX;
            // Diminui a velocidade de deslocamento
            tX += desX * 0.1;
            tY += desY * 0.1;
            
            // Passa as novas cordenadas para o funçãs Transform movimentando assim o carousel
            applyTransform(arrastar_El);
            // Para aumenta apenas de 1 em 1 atualiza o valor das cordenadas de entrada.
        sX = nX;
        sY = nY;
    };

    // Pegar as cordenadas de saída, quando solta a tecla do mouse
    // dando uma leve continuidade para a direção de onde estava rodando o carousel,
    // também dando uma leve pausa na animação
    this.onpointerup = function (e) {
        // console.log(e.clientX);
        // console.log(e.clientY);
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
};

// Aproximar e afastar capiturando o SCROLL do mouse 
document.onwheel = function (e) {
    e = e || window.event;
    let d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    console.log(d);
    init(0.0001)
}