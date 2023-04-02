/**---( 1 )
 *      ====================================
 *                    SELECT ELEMENTS
 *      ====================================
 */
//----------Select Elements INPUT-----------//
let searchNote = document.querySelector('#search-input');
let addNote = document.querySelector('#note-input');
let titleNote = document.querySelector('.title');
let textarea = document.querySelectorAll('.textarea');
// Select Buttons
let searchButton = document.querySelector('.search-button');
let btnAddNote = document.querySelector('.add-note');
let btnRemove = document.querySelector('bi-x-lg');

//----------Iniciar após algum tempo para pegar todos os elementos BTN-CHECK; 
setTimeout(() => {
    console.log("oi")
    let btnCheck = [...document.querySelectorAll('.check')];

    btnCheck.map(element => element.addEventListener('click', (e) => {
        if (e.target.parentElement.getAttribute('class') == 'check') {
        
            e.target.parentElement.parentElement.querySelector('.textarea').classList.toggle('background');
            e.target.parentElement.parentElement.querySelector('.title').classList.toggle('background');

        
        } else if (e.target.parentElement.getAttribute('class') == 'note') {
            e.target.parentElement.querySelector('.textarea').classList.toggle('background');
            e.target.parentElement.querySelector('.title').classList.toggle('background');

        }
}));
    
}, 2000);

// Select Containers
let notesContainer = document.querySelector('#notes-container');
let btnSalve = document.querySelectorAll('.btn-salve');

/**
 *      ====================================
 *                    FUNCTIONS
 *      ====================================
 */

//---( 2 )-------Números de visitas (por carregamento da página);----------//
if(typeof(Storage) != undefined ) {
    if (localStorage.visitas) {
        localStorage.visitas = Number(localStorage.visitas)+1;
    } else {
        localStorage.visitas = 1;
    }
};


function salveNote(e) {

    if (e.id) {

        let note = {
            id: e.id,
            title: e.title,
            text: e.text
        };

        localStorage.setItem(e.id, JSON.stringify(note));

    } else {

        let targetEl = e.target;
        let parentEl = targetEl.closest('div');
        let id = parentEl.querySelector('.id').value;

        let note = {
            id: id,
            title: parentEl.querySelector('.title').value,
            text: parentEl.querySelector('.textarea').value
        };

        localStorage.setItem(id, JSON.stringify(note));
    }


}


//---( 3 )-------pega os elementos do localStorage e cria as notas----------//
function getLocalStore() {

    let notes = localStorage;

    for (let index = 0; index < notes.length; index++) {
        // Só vai entrar se for um número, permitindo usar o localStore com outras chaves com nome
        if (Number(notes.key(index))) {
            let newObject = JSON.parse(localStorage.getItem(notes.key(index)));
            create_note(newObject);
        }

    }

};

getLocalStore();

//Função geradora de chave ID
function getRandomIntInclusive() {
    min = Math.ceil(233);
    max = Math.floor(1999);
    let id = Math.floor(Math.random() * (max - min + 1)) + min;
    return id;
};


function addEVT() {

    let notesContainer = document.querySelectorAll('.note');

    notesContainer.forEach(element => {

        let idEl = element.querySelector('.id');
        let textarea = element.querySelector('.textarea').innerText;
        let id = idEl.getAttribute('value');
        const notes = {

            id: id,
            textarea: textarea

        };

        localStorage.setItem(id, JSON.stringify(notes));



    });

};

//---( 4 )-------Cria os elementos vindo do localStorage e da adição de nota----------//
//---( 6 )-------Quando chamada através da adição de nova nota, chama-se a função geradora de ID-----------//
function create_note(value) {

    // Create Elements
    let inputId = document.createElement('input');
    let divNote = document.createElement('div');
    let divTitle = document.createElement('input');
    let textarea = document.createElement('textarea');
    let buttonSalve = document.createElement('button');;
    let buttonCheck = document.createElement('button');
    let buttonDel = document.createElement('button');
    let buttonDuplic = document.createElement('button');
    let icon_1 = document.createElement('i');
    let icon_2 = document.createElement('i');
    let icon_3 = document.createElement('i');

    // Confere se foi passado um ID através do parametro value, caso não fora passado cria-se um novo elemento
    // gerando um novo ID através da função geradora de ID
    let id;
    if (value.id) {

        id = value.id;
        divTitle.setAttribute('value', value.title);
        textarea.innerText = value.text;

        let note = {
            id: value.id,
            title: value.title,
            text: value.text
        };

        salveNote(note);

    } else {

        // Generator Id
        id = getRandomIntInclusive();
        divTitle.setAttribute('value', value);
        textarea.innerText = 'Digite suas anotações!';

        let note = {
            id: id,
            title: value,
            text: 'Digite suas anotações!'
        };

        salveNote(note);

    };


    // Set Attributes
    textarea.setAttribute('class', 'textarea');
    inputId.setAttribute('value', id);
    inputId.setAttribute('class', 'id');
    divNote.setAttribute('class', 'note');
    divTitle.setAttribute('class', 'title');
    buttonCheck.setAttribute('class', 'check');
    buttonDel.setAttribute('class', 'del')
    buttonDuplic.setAttribute('class', 'duplic')
    buttonSalve.setAttribute('class', 'btn-salve');
    icon_1.setAttribute('class', 'bi bi-pin');
    icon_2.setAttribute('class', 'bi bi-x-lg');
    icon_3.setAttribute('class', 'bi bi-file-earmark-plus');



    // Append Child
    notesContainer.appendChild(divNote);
    divNote.appendChild(divTitle);
    divNote.appendChild(textarea);
    divNote.appendChild(buttonCheck);
    divNote.appendChild(buttonDel);
    divNote.appendChild(buttonDuplic);
    divNote.appendChild(inputId);
    divNote.appendChild(buttonSalve);
    buttonCheck.appendChild(icon_1);
    buttonDel.appendChild(icon_2);
    buttonDuplic.appendChild(icon_3);
    buttonSalve.innerText = "Salvar";



};

/**
 *      ====================================
 *              ADD EVENT LISTENER
 *      ====================================
*/

//--( 7 )--( 8 )--( 9 )--Salvar--Deletar--Duplicar-------//
document.addEventListener('click', (e) => {

    let targetEl = e.target;
    let parentEl = targetEl.closest('div');
    let id;

    //---( 7 )-------Salva alterações da nota----------//
    if (targetEl.getAttribute('class') == 'btn-salve') {

        salveNote(e);

    }
    //---( 8 )-------Deleta a nota no localStorage e no html----------//
    if (targetEl.getAttribute('class') === 'del' || targetEl.getAttribute('class') === 'bi bi-x-lg') {
        let id = parentEl.querySelector('.id').value;
        localStorage.removeItem(id);
        parentEl.remove();
    }
    //---( 9 )-------Duplica a nota no localStorage e no html com um  ID novo----------//
    if (targetEl.getAttribute('class') === 'duplic' || targetEl.getAttribute('class') === 'bi bi-file-earmark-plus') {
        let notes = parentEl.innerHTML;
        let div = document.createElement('div');

        // Gerando ID
        id = getRandomIntInclusive();
        div.classList.add('note');
        div.innerHTML = notes;
        div.querySelector('.id').setAttribute('value', id );
        let title = div.querySelector('.title').value;
        let textarea = div.querySelector('.textarea').value;
        notesContainer.appendChild(div);

        console.log(title);
        console.log(textarea);
        let note = {
            id: id,
            title: title,
            text: textarea
        };

        salveNote(note);

    }

});


//---( 5 )-------Adiciona nova nota, gera um ID automáticamente para cada nota add----------//
btnAddNote.addEventListener('click', (e) => {
    let text = addNote.value;
    create_note(text);

});







