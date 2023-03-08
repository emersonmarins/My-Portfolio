const btn_trailer = document.querySelector('.btn-trailer');
const trailer = document.querySelector('.modal');
const modal = document.querySelector('.conteudo-modal');
const video = document.getElementById('video');
const link_video = video.src;

function hidden() {
    trailer.classList.toggle('aberto');
}

btn_trailer.addEventListener('click', (e) =>{
    e.preventDefault();
    hidden();
    // trailer.setAttribute('class','modal aberto');
    // trailer.classList.add('aberto');
    // video.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk");
    video.setAttribute("src", link_video);
});


modal.addEventListener('click', (e) =>{
    e.preventDefault();
    hidden();
    // trailer.setAttribute('class','modal');
    // trailer.classList.remove('aberto');
    video.setAttribute("src", "");
});