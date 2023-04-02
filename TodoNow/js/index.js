/**
 *  1 - Seleciona todos os elementos do DOM que irá ser necessário para implementação da lógica de programação
 *      e das regras de negócio.
 * 
*/
// Select Objects
const containerPrincipal = document.querySelector('.container-principal');
const header = document.querySelector('.todo-header');
const formList = document.querySelector('.form-todo-list');
const newTarefa = document.querySelector('#new-tarefa');
const btnNewTarefa = document.querySelector('.btn-new-tarefa');
const search = document.querySelector('#search');
const btnSearch = document.querySelector('.btn-search');
const formSearch = document.querySelector('.search-form');
const main = document.querySelector('.main-todo-list');
const editTarefa = document.querySelector('.edit-tarefa');
const btnEditTarefa = document.querySelector('.btn-edit-tarefa');
let tarefaEditada;
let tarefa;
let tarefasAll = [];


/**
 *  2 - Quando a página é carregada, caso seja o primeiro acesso, inicia-se uma verificação se existe 
 *      o suporte para o LocalStore no browser, caso exista a variável { visitas } atribui-se mais 1 visita,
 *      se não existir cria-se a variável { visita } e atribui-se 1 visita.
 * 
*/
// Local Storage 
// Contando o número de visitas
if (typeof(Storage) != undefined) {
    
    if (localStorage.visitas) {
            localStorage.visitas = Number(localStorage.visitas)+1;        
    } else {
            localStorage.visitas = 1;
    }

    
} else {
    
    document.write('Sem suporte ao Local Storage')
}



/**
 *  3 - Quando a página é carregada, inicia-se uma verificação se existe uma string de { TAREFAS } no LocalStore, 
 *      caso exista a string { TAREFAS } se transforma eu um array pelo método " SPLIT " 
 *      e salva-se o array na variável " newObject " e retorna para savar na váriavel " test ",
 *      se não existir retorna e continua a executar as demais linhas do código.
 * 
 */
// Get Tarefas
function getLocalStorage() {
    let taref = localStorage.getItem('tarefas');

    if (taref == null || taref == undefined) {
        return null
    }else {
        let newObject = taref.split(',');
        return newObject;
    }
}

// Salvando tarefas
let test = getLocalStorage();


/**
 *  4 - Verifica-se se existe o array na variável { TEST }, caso exista o array para cada elemento 
 *      chama-se a função " addTarefa " pelo método " forEach " que cria dinamicamente as tarefas no HTML.
 *      Também add cada tarefa vinda do LocalStore em um array temporário chamado { tarefasAll }.
 * 
 */
if (test != null) {

    test.forEach(element => {
        addTarefa(element);
        tarefasAll.push(element);    
        
    });
}

/**
 *  2F - Ao se chamado pelo evento " btnNewTarefa " será adicionado no localStore.
 *       Nota-se que ao salvar no localStore é feito uma nova array dos elementos
 *       da página, pois ao editar uma tarefa por não possuir um ID pode alterar o documento errado.
 * 
 */
function saveLocalStorage(params) {
    if (params == 'done') {
        let save = document.querySelectorAll('.div-tarefas');
        tarefasAll = [];
        
        save.forEach(element => {
           
            if (element.getAttribute('class','done') == 'div-tarefas done') {
                
                let tarefa = element.querySelector('p').innerText;
                tarefasAll.push(tarefa + ' done');
                
            } else {
                let tarefa = element.querySelector('p').innerText;
                tarefasAll.push(tarefa);
            }
        });
        saveLocalStorage();
    } else {
        let save = document.querySelectorAll('.div-tarefas');
        tarefasAll = [];
        save.forEach(element => {
            
            if (element.getAttribute('class', 'done') == 'div-tarefas done') {
                let tarefa = element.querySelector('p').innerText;
                tarefasAll.push(tarefa + ' done');
            } else {

                let tarefa = element.querySelector('p').innerText;
                tarefasAll.push(tarefa);

            }

        });

        localStorage.tarefas = '';
        localStorage.tarefas = tarefasAll; 

    }
    
}


// Function
function getTarefas() {
    const divForm = document.querySelectorAll('.div-tarefas');
    return divForm;

}


/**
 *  5 - Na construção das tarefas, verifica se a palavra " done " existe, vinda do " LocalStore ", pelo método " foreach "
 *      que é responsável por indicar que a tarefa foi " conluída ", existindo a palavra " done " no elemento " form "
 *      dessa tarefa irá receber uma { class=" done " } que visualmente terá um background indicando tarefa concluída.
 */
function addTarefa(tarefa) {
    
    const form = document.createElement('form');
    main.appendChild(form);
    if (tarefa.search('done') != -1) {
        form.classList.add('div-tarefas', 'done');
        tarefa = tarefa.replace('done', ' ');
        
    }else {
        form.classList.add('div-tarefas'); 
    }

    const tarefas = document.createElement('p');
    tarefas.classList.add('tarefas');
    tarefas.innerText = tarefa;
    form.appendChild(tarefas);
    
    const btnCheck = document.createElement('button');
    btnCheck.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    btnCheck.classList.add('check-btn', 'one');
    form.appendChild(btnCheck);

    const btnEdit = document.createElement('button');
    btnEdit.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    btnEdit.classList.add('edit-btn', 'two');
    form.appendChild(btnEdit);

    const btnDel = document.createElement('button');
    btnDel.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnDel.classList.add('del-btn', 'tree');
    form.appendChild(btnDel);
    

}

/**
 *  1F - Ao add nova tarefa é recebido o seu valor pelo input e adiconado no array { tarefasAll }, 
 *       na { function addTarefa }, e na { function saveLocalStorage }.
 * 
 */
// Events
btnNewTarefa.addEventListener('click', (e) => {
    e.preventDefault();
    tarefa = newTarefa.value;
    tarefasAll.push(tarefa);
    
    // use value for input
    newTarefa.value = "";
    newTarefa.focus();
    
    addTarefa(tarefa);
    saveLocalStorage();

});


document.addEventListener('click', (e) => {
    // e.preventDefault();
    const targetEl = e.target;
    const parentEl = targetEl.closest('form');
    const parentMain = targetEl.closest('main');
    // let title;

    // new array
 
    

    // if (parentEl && parentEl.querySelector('p')) {
    //     title = parentEl.querySelector('p').innerText;
     
    // }

    if (targetEl.classList.contains('check-btn') || targetEl.classList.contains('fa-circle-check')) {
        console.log('check-btn')
        parentEl.classList.toggle('done');
        saveLocalStorage('done');        
    }

    if (targetEl.classList.contains('del-btn') || targetEl.classList.contains('fa-trash')) {
        parentEl.remove();
        saveLocalStorage();
    }

    /**
     *  4F - Ao clicar no buttom editar tarefa, retira-se o display " none " dos elementos de edição e coloca-se
     *       o display " none " nos demais elementos que não compoem a página de edição.
     *       Também atribui-se um { id=" edit " } na tag " p ", para identificar qual será o elemento que receberá a atualização.
     * 
     */
    if (targetEl.classList.contains('edit-btn') || targetEl.classList.contains('fa-pen')) {

        const formTarefa = document.querySelector('.div-tarefas');
        const tarefas = parentEl.querySelector('.tarefas').innerText;
        const inputEdit = document.querySelector('#edit-tarefa');
        const tarefaId = parentEl.querySelector('p');


        tarefaId.setAttribute('id', 'edit')
        header.classList.toggle('hidde');
        main.setAttribute('id', 'hidde');    
        formTarefa.classList.toggle('hidde');
        editTarefa.classList.toggle('hidde');
        inputEdit.value = tarefas;
        tarefaEditada = tarefas;

    }

    if (targetEl.classList.contains('btn-return')) {
        const formTarefa = document.querySelector('.div-tarefas');

        header.classList.toggle('hidde');
        main.removeAttribute('id', 'hidde');    
        formTarefa.classList.toggle('hidde');
        editTarefa.classList.toggle('hidde');
    }

});



/**
 *  5F - Ao clicar no buttom editar tarefa, seleciona-se os elementos para edição e verifica qual elemento tem
 *       o { id=" edit " } para editar, depois retira-se o atributo id="edit".
 *       Depois salva no localStore.
 * 
 */
btnEditTarefa.addEventListener('click', (e) => {
    e.preventDefault();

    const inputText = document.querySelector('#edit-tarefa').value;
    const textarea = document.querySelector('#text-tarefa').innerText;
    const divForm = document.querySelectorAll('.div-tarefas');

    divForm.forEach(element => {

        // console.log(element.querySelector('p').getAttribute('id'));
        if (element.querySelector('p').innerText == tarefaEditada && element.querySelector('p').getAttribute('id') == 'edit') {
            const p = element.querySelector('p');
            p.innerText = inputText;
            p.removeAttribute('id', 'edit');
            saveLocalStorage();
            
        } 
        
        
        
    });


})

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


    



})




// let arr = ['emerson','Layane', 'Bruna', 'Miguel'];
// localStorage.setItem('nomes',`${arr}`);

// let value = localStorage.getItem('nomes'); // OU  let value = localStorage.nomes;
// console.log(value);

// Remove localStorage
// localStorage.removeItem('nomes');