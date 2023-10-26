const { response } = require("express");
const { ObjectId } = require("mongodb");
const db = require("./connect");

// Insert Mongodb
function insert(params,options) {
    console.log(params)
    
        db.then((conect) => {
            dbo = conect.db("aula02");
            dbo.collection(options).insertOne(params)
                .then(() => {
                        console.log("ok");
            })
            .catch((erro) => {
                if (erro) throw erro
            });
        }).catch((erro) => {console.log(erro)});

} 

// Count Collections
function count() {
    
    db.then((conect) => {
        dbo = conect.db("aula02");
        const numCollections = dbo.collection("users").countDocument().then().catch()
       
    }).catch((erro) => {console.log(erro)});


} 

// Criar um paramento para find, bucar pelo nome

// Find Mongodb
async function find(options) {
    
    let con = await db.then(
        
        async (conect) => {
            dbo = conect.db("aula02");
            let cont = await dbo.collection(options).find().toArray()
            .then(async (res)=> {
                return res;
            }).catch((erro) => {console.log(erro)});
            return cont;          
        }
    ).catch((error) => {console.log(error)});
    return con;
}

// Find Específico
async function findId(options, id) {
    
    let dados = await db.then(

        async (conect) => {
            const dbo = conect.db('aula02');
            const query = {id: id};
            console.log(query);
            let cont = await dbo.collection(options).find(query).toArray()
            .then((res) => {
                return res;
            }).catch((error) => {console.log(error)});
            return cont;
        }
    ).catch((error) => {console.log(error)});
    return dados;
}


// Remove
async function remove(options, id) {
    
    let dados = await db.then(

        async (conect) => {
            const dbo = conect.db('aula02');
            let query = '';
            if (options == 'users') {

                const queryUser = {_id: new ObjectId(id)};
                const queryCursos = {id: id};
                await dbo.collection(options).deleteMany(queryUser);
                await dbo.collection('cursos').deleteMany(queryCursos);

            }else {

                query = {_id: new ObjectId(id)};
                console.log(query);
                await dbo.collection(options).deleteOne(query);


            }
        }
    ).catch((error) => {console.log(error)});
    return dados;
}


module.exports = {insert, count, find, findId, remove};
