const express = require('express');
const router = express.Router();
const db =  require('../models/insertdb');



router.post('/', async (req, res, next) => {

  const nome = req.body.user.trim();
  const password = req.body.password.trim();
  const confirm_password = req.body.confirmPassword.trim();
  const obj = {nome: nome, password: password};
  const options = "users";
  const users = await db.find(options);
  let cursos =  [];
  let id = '';
  

  // Form validation
  if (nome.length == 0 || password.length == 0 || confirm_password.length == 0) {
    res.render('cadastrouser', {alert:"Preencha todos os campos!"});
  }
  

  users.forEach( element => {

    if (nome == element.nome.trim()) {
      res.render('cadastrouser', {alert:"Nome do Usuário já cadastrado! escolha outro nome"});
      return;
    }

  });

 
  if (password != confirm_password) { 
    
    res.render('cadastrouser', {alert:"Senhas diferentes! Insira novamente"});

  } else {

    db.insert(obj, options);
    const user = await db.find(options);
    user.forEach(element => {
      
      if (element.nome == nome){
        id = element._id;
        id = id.toString();
        id = id.replace('new ObjectId(', '').replace(')', '');
        return id;
      }

    });
 
    res.render('cursos', {id, cursos});

  
};
  
  

});

/* GET home page. */
router.get('/',async (req, res, next) => {
  const alert = ""
  res.render('cadastrouser', {alert});

});





module.exports = router;