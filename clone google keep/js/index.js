/**
 *      ====================================
 *                    SELECT ELEMENTS
 *      ====================================
 */
// Select Elements INPUT
let searchNote = document.querySelector('#search-input');
let addNote = document.querySelector('#note-input');
let titleNote = document.querySelector('.title');
let textarea = document.querySelectorAll('.textarea');
// Select Buttons
let searchButton = document.querySelector('.search-button');
let btnAddNote = document.querySelector('.add-note');
let btnRemove = document.querySelector('bi-x-lg');
// Select Containers
let notesContainer = document.querySelector('#notes-container');
let btnSalve = document.querySelectorAll('.btn-salve');

/**
 *      ====================================
 *                    FUNCTIONS
 *      ====================================
 */

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

function getLocalStore() {

    let notes = localStorage;

    for (let index = 0; index < notes.length; index++) {
        let newObject = JSON.parse(localStorage.getItem(notes.key(index)));
        create_note(newObject);

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
document.addEventListener('click', (e) => {

    let targetEl = e.target;
    let parentEl = targetEl.closest('div');
    let id;

    if (targetEl.getAttribute('class') == 'btn-salve') {

        salveNote(e);

    }

    if (targetEl.getAttribute('class') === 'del' || targetEl.getAttribute('class') === 'bi bi-x-lg') {
        let id = parentEl.querySelector('.id').value;
        localStorage.removeItem(id);
        parentEl.remove();

    }

    if (targetEl.getAttribute('class') === 'duplic' || targetEl.getAttribute('class') === 'bi bi-file-earmark-plus') {
        // console.log(notesContainer );
        let notes = parentEl.innerHTML;
        let div = document.createElement('div');
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

btnAddNote.addEventListener('click', (e) => {
    let text = addNote.value;
    create_note(text);

});






