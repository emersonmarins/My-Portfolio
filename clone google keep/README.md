COMO RODAR O PROJEOTO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install


SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init


Gerencia as requisições, rotas e URLs, entre outra funcionalidades 
### npm install express


Salvando no LocalStore, pasando de object para Json e Json para object
# localStorage.setItem("person", JSON.stringify(person));
# const getPerson = localStorage.getItem("person");
# console.log(getPerson);
# const personObject = JSON.parse(getPerson);


// window.onbeforeunload = (event) => {  `localStorage.salvaAui = "Esse evento será usado para salvar no banco de dados"`};




// localStorage.array += `[{id: ${tt}, Anotações: ${notas}}],`;

// let uu = localStorage.getItem('array')
// uu.forEach(element => {
//     console.log(element)
// });


// idNote.push(localStorage.getItem('array'));
// splice();
// localStorage.setItem('array', `{id: ${tt}, Anotações: ${notas}}`);
// console.log(idNote);