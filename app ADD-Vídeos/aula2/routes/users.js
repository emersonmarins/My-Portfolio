var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


// const db = mongodb.connect("mongodb://localhost:27017")
//     .then((conect) => {
//         console.log("conectado "+conect);
//         const dbo = conect.db("aula02");
//         const obj = {curso: "Curso de Node", canal: "CFB Cursos"};
//         console.log("Connected!");
//         dbo.collection("cursos").insertOne(obj)
//             .then(() => {
//                 console.log("Coleção inserida com sucesso!")
//                 // conect.close
//             })
//             .catch((erro) => {
//                 if(erro) throw erro
//             });     
        
//     })
//     .catch((error => console.log("erro ao se conectar! "+error)))