const express = require('express');
const router = express.Router();
const db =  require('../models/insertdb');

router.post('/', async(req, res, next) => {

    // let result = true;
    const nome = req.body.user.trim();
    const pass = req.body.password.trim();
    
    const options = "users";
    const users = await db.find(options);

    let userFound = true;
    function error() {
      
      console.log('sera que ele vai me executar :(');      
      return userFound = false;
      
      
    }
    
    if (nome === "Emerson" && pass === "123") {
      users.forEach(async element => {
        if (element.nome.trim() === nome && element.password === pass){

          
          error();

          let id = element._id;
          id = id.toString();
          id = id.replace('new ObjectId(', '').replace(')', '');

          const optionsCursos = "cursos";
          let cursos = await db.findId(optionsCursos, id);
     
          res.render('cursosadmin', {users, id, cursos});
          return;
          
        }
      }); 
      
    } else {
          
          await users.forEach(async element => {
          if(element.nome.trim() === nome && element.password === pass){
            
            error();

            let id = element._id;
            id = id.toString();
            id = id.replace('new ObjectId(', '').replace(')', '');

            const optionsCursos = "cursos";
            let cursos = await db.findId(optionsCursos, id);
    
            res.render('cursos', {id, cursos});
            return;

          }
        }) 

      }

      if (userFound) {
        const alert = "Usuário ou Senha errado!"
        res.render('login', {alert});
      }

  })

router.post('/new-curso', async (req, res, next) => {
  
  const user = req.body.admin;
  const id = req.body.id;
  const title = req.body.title.trim();
  const description = req.body.description.trim();
  const iframe = req.body.text.trim();
  const notes = req.body.notes.trim();
  const obj = {id: id, title: title, description: description, iframe: iframe, notes: notes}
  const dbo = "users";
  const optionsCursos = "cursos";
  
  // Insert Curso
  const options = "cursos";
  db.insert(obj, options);
  
  // Get Cursos e Users
  const cursos = await db.findId(optionsCursos, id);
  const users = await db.find(dbo);

  if (user == 1) {
    
        res.render('cursosadmin', {users, id, cursos});
        return;
    
  } else {

        res.render('cursos',{cursos, id});

  };
});

router.post('/delete', async (req, res, next) => {
  const admin = req.body.admin;
  const id = req.body.idAdmin;
  const idUser = req.body.id;
  const options = req.body.options;
  const optionsCursos = "cursos";
  const user = "users";
  

  // Remove 
  db.remove(options, idUser);

  const cursos = await db.findId(optionsCursos, id);
  const users = await db.find(user);

  if (admin == 1) {
    
    res.render('cursosadmin', {users, id, cursos});
    return;

  } else {

    res.render('cursos',{cursos, id});

  };

}); 

module.exports = router