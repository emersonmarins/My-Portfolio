let btnAdd = document.querySelector('.btn-submit')

btnAdd.addEventListener('click',(e) => {
    e.preventDefault()
    console.log('funcionou')
    addTask()
})

function addTask() {
    //titulo da tarefa
    let txt1 = document.querySelector('.tasks-input').value
    
    if(txt1) {

        //clonar template
        let template = document.querySelector('.template')
        let cloneTemplate = template.cloneNode(true)
        
        //adicionar title
        cloneTemplate.querySelector('.task-title').textContent = txt1
        console.log(cloneTemplate)
        
        //adicionar a ul
        let listUl = document.querySelector('.task-list')
        listUl.appendChild(cloneTemplate)
        
        //remover classes 
        cloneTemplate.classList.remove('hide', 'template')

        //Criar evento remove
        const btnRemove = cloneTemplate.querySelector('.remove-btn').addEventListener('click',function() {

            removeTask(this)

        })

        //marca task como seleciomado
        const btnSelect = cloneTemplate.querySelector('.done-btn').addEventListener('click',    function() {

            selectTask(this)
            
        })

        //limpar texto 
        document.querySelector('.tasks-input').value = ""

    }
}

function selectTask(select) {

    select.parentNode.classList.toggle('done')

}

function removeTask(task) {
    console.log(task)
    
    task.parentNode.remove(true)

}

