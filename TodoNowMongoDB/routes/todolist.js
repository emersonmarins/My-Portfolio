var express = require('express');
const { ObjectId } = require('mongodb');
var router = express.Router();
const db = require('../crud');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const bank = 'todolist';
  const collection = 'tarefas';
  let array = null;

  const tarefas = await db.find(bank, collection, array);
  res.render('todolist', { tarefas: tarefas });

});

router.post('/', async (req, res, next) => {


  const display = req.body.display;
  const btnadd = req.body.add;
  const btnCheck = req.body.btnCheck;
  const btndelete = req.body.del;
  const id = req.body.id;
  let tarefa = req.body.newTarefa;
  let tarefaEditada = req.body.tarefaEditada;
  const bank = 'todolist';
  const collection = 'tarefas';
  const annotations = req.body.annotations;
  let array = null;
  let query = {
    title: tarefa,
    annotations: annotations,
    display: false
  };

  // console.log(typeof(tarefa));
  // console.log(typeof(tarefaEditada));

  if (typeof(tarefa) == "undefined") {
    tarefa = "";
    
  }
  if (typeof(tarefaEditada) == "undefined") {
    tarefaEditada = "";
  }


  // console.log(typeof(tarefa));
  // console.log(typeof(tarefaEditada));

  // Método Update
  async function updateList(params) {

    const objectId = { _id: new ObjectId(id) };
    const query = { $set: { display: params } };

    await db.update(bank, collection, objectId, query);
    const tarefas = await db.find(bank, collection, array);
    res.render('todolist', { tarefas: tarefas });

  };
  // Deletar Tarefa
  if (btndelete == "del") {

    await db.remove(bank, collection, id);
    const tarefas = await db.find(bank, collection, array);
    res.render('todolist', { tarefas: tarefas });

  // Listar Tarefa como concluída
  } else if (btnCheck == 'true') {

    if (display == 'done') {

      updateList("false");

    } else {

      updateList("done");

    }
  // ADD NEW TAREF
  } else if (btnadd == "true" && tarefa.length > 0){
    
    await db.insert(bank, collection, query);
    const tarefas = await db.find(bank, collection, array);
    res.render('todolist', { tarefas: tarefas });
  
  // Tarefa Editada
  } else if (tarefaEditada.length > 0) {
    
    const objectId = { _id: new ObjectId(id) };
    const query = { $set: { title: tarefaEditada, annotations: annotations } };

    await db.update(bank, collection, objectId, query);
    const tarefas = await db.find(bank, collection, array);
    res.render('todolist', { tarefas: tarefas });

  } else {

    const tarefas = await db.find(bank, collection, array);
    res.render('todolist', { tarefas: tarefas });

  }

});

module.exports = router;