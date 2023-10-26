/** 
  * O node:path é um módulo que fornece utilitários para trabalhar com 
  * aminhos de arquivos e diretórios. Ele pode ser acessado usando: 
  */

const path = require('path'); 
// const path = require('node:path'); LINK EXEMPLO <<{ https://www.w3schools.com/nodejs/ref_path.asp }>>


/**
  *      |=================|
  *      |   CRUD MONGODB  |
  *      |=================|
  * 
  *     $gt(greater than);
  *     $lt(less than);
  *     $lte(less than or equal to);
  *     $gte(greater than or equal to);
  */

db.colecction.find({$gt});
db.collection.find({"items.price": { $gt: 50 } });
db.collection.find({"items.price": { $lt: 50 } });
db.collection.find({"items.price": { $gte: 50 } });
db.collection.find({"items.price": { $lte: 50 } });

// Retorna apenas elementos que contenha o valor dentro de um array
db.collection.find({
    products: { 
        $elemMatch: { $eq: "InvestmentStock" } 
      }
    });

// O $elemMatchoperador é um operador válido incluído no MongoDB Shell 
// para localizar um subdocumento que corresponda a critérios específicos em uma matriz.
db.collection.find({
  items: {
    $elemMatch: { name: "laptop", price: { $gt: 800 }, quantity: { $gte: 1 } },
  },
}
);