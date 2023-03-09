var http = require('http');
http.createServer().listen(8081);


let container_modal = document.querySelector('.modal');
let login_open = document.querySelector('.login');
console.log(login_open);
let btn_close_modal = document.querySelector('.btn_modal_close');
console.log(btn_close_modal);
let btn_login = document.querySelector('.btn_modal_entrar');
let btn_cadastrar = document.querySelector('.btn_modal_cadastrar');
let fade = document.querySelector('.fade');


[login_open, btn_close_modal].forEach(element => {
    element.addEventListener('click', () => {
            fade.classList.toggle('hide');
            container_modal.classList.toggle('hide');
            container_modal.classList.toggle('appear');
    });
});

    // [login_open, btn_close_modal].forEach(element => {
    //     element.addEventListener('click', () => {
    //         [fade, container_modal].forEach(element => {
    //             element.classList.toggle('hide');
    //             element.classList.toggle('appear');

    //         });
    //     });
    // });
