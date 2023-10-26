const header = document.querySelector('.todo-header');
const search = document.querySelector('#search');
const btnSearch = document.querySelector('.btn-search');
const main = document.querySelector('.main-todo-list');
const editTarefa = document.querySelector('.edit-tarefa');
const btnEditTarefa = document.querySelector('.btn-edit-tarefa');
const btnEditTar = document.querySelectorAll('.edit-btn');
const tarefId = document.getElementById('id');
const formEdit = document.querySelector('.form-edit');


let tarefaEditada;
let tarefa;
let tarefasAll = [];


// Function
function getTarefas() {
    const divForm = document.querySelectorAll('.div-tarefas');
    return divForm;

};

function editTar(e) {

    const targetEl = e.target;
    const parentEl = targetEl.closest('form');
    const formTarefa = document.querySelector('.div-tarefas');
    const tarefas = parentEl.querySelector('.tarefas').innerText;
    const inputEdit = document.querySelector('#edit-tarefa');
    const tarefaId = parentEl.querySelector('p');
    const annotationsEl = parentEl.querySelector('.areaAnnotations').innerText;
    const annotations = document.querySelector('.annotations');
    let tarefId = parentEl.querySelector('#tarefId');
    tarefId = tarefId.getAttribute('value');
    const input = document.createElement('input');
    input.setAttribute('value', tarefId);
    input.setAttribute('id', 'hidde');
    input.setAttribute('name', 'id');
    formEdit.appendChild(input);
    

    tarefaId.setAttribute('id', 'edit')
    header.classList.toggle('hidde');
    main.setAttribute('id', 'hidde');
    formTarefa.classList.toggle('hidde');
    editTarefa.classList.toggle('hidde');
    annotations.innerText = annotationsEl;
    inputEdit.value = tarefas;
    tarefaEditada = tarefas;
};

// AddEventListener
btnEditTar.forEach(element => {

    element.addEventListener('click', (e) => {

        e.preventDefault();
        console.log(btnEditTar + ' Entrou aqui');
        editTar(e);

    });

});

btnSearch.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = document.querySelector('#select-filter');
    const taref = getTarefas();
    let filterName;
   
    if (search.value == '') {

        filterName = true

    } else {

        filterName = search.value.trim();

    }

    if (filter.value == 'todas') {
        taref.forEach(element => {


            if (filterName == true) {

                element.removeAttribute('id', 'hidde');

            } else if (element.innerText.trim() == filterName) {

                element.removeAttribute('id', 'hidde');

            } else {

                element.setAttribute('id', 'hidde');

            }


        });
    }

    if (filter.value == 'pendentes') {

        taref.forEach(element => {
            element.removeAttribute('id', 'hidde');



            if (filterName == true) {

                if (element.getAttribute('class', 'done') == 'div-tarefas done') {
                    element.setAttribute('id', 'hidde');

                }

            } else {

                if (element.getAttribute('class', 'done') == 'div-tarefas done') {
                    element.setAttribute('id', 'hidde');

                }
                if (element.innerText.trim() != filterName) {
                    element.setAttribute('id', 'hidde');
                }

            }


        });

    }

    if (filter.value == 'concluidas') {

        taref.forEach(element => {
            element.setAttribute('id', 'hidde')


            if (filterName == true) {

                if (element.getAttribute('class', 'done') == 'div-tarefas done') {
                    element.removeAttribute('id', 'hidde');

                }

            } else {

                if (element.getAttribute('class', 'done') == 'div-tarefas done' && element.innerText.trim() == filterName) {
                    element.removeAttribute('id', 'hidde');

                }

            }


        });

    }





});

// btnEditTarefa.addEventListener('click', (e) => {
//     e.preventDefault();

//     const inputText = document.querySelector('#edit-tarefa').value;
//     const textarea = document.querySelector('#text-tarefa').innerText;
//     const divForm = document.querySelectorAll('.div-tarefas');

//     divForm.forEach(element => {

//         // console.log(element.querySelector('p').getAttribute('id'));
//         if (element.querySelector('p').innerText == tarefaEditada && element.querySelector('p').getAttribute('id') == 'edit') {
//             const p = element.querySelector('p');
//             p.innerText = inputText;
//             p.removeAttribute('id', 'edit');
//             // saveLocalStorage();

//         }



//     });


// });
