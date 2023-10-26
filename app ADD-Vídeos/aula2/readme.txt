// Comando do < MONGODB >

use cadastro // cria um bando de dados;
show databases // mostra os bancos de dados;
use nome-do-banco-de-dados // seleciona o banco de dados;
show collections; // Mostra o nome da coleção como se fosse a tabela do MYSQL;
db.nome-da-collection.find() // Mostra os dados cadastrados;
db.nome-da-collection.deleteMany() // Deleta todos os dados cadastrados na collection;
db.movies.deleteOne( { cast: "Brad Pitt" } ) // Deleta um dado cadastrado na collection;
