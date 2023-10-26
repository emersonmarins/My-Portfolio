Comando MONGODB

    
1 - use teste03   <<{ Seleciona uma collection caso ainda não tenha cria uma }}>>

2 - db.clientes.insert({nome: "Emerson", nasc: "11-03-1992", email: "emersonmarinscoutinho@gmail.com", dateCriate:"17-fev-2023 17:47hs" })

2.1 - db.clientes.insertMany({ title: 'Iron Man', rating: 'very cool' },
                             { title: 'Iron Man', rating: 'very cool' });

3 - db.clientes.count() <<{ Mostra quantas collection tem }>>

4 - db.clientes.find() <<{ Mostra os dados das collections }>>

5 - db.clientes.find().pretty() <<{ Mostra o conteúdo organizado das collections }>>

6 - db.clientes.find({nome: /emerson/i})  <<{ Torna a consulta case-insensitive }>>

7 - db.clientes.update({nome: "Emerson"}, {_id: "7"}) <<{ Esse update ATUALIZA O CAMPO SELECIONADO, e o restante exclui }>>

8 - db.clientes.updatesOne({nome: "Emerson"}, {_id: "7"})  <<{ Esse UPDATE ATUALIZA APENAS OS CAMPOS QUE RECEBERAM NOVOS DADOS }>>

9 - db.clientes.remove({_id: ObjectId("5ae107e53faff568ef57661a")}) <<{ Remove o/os registro/s que tivem o valor passado}>>

10 - db.clientes.find({nome: {$regex: /u/ } }).pretty() <<{ Pode se usar expressões regulares nas pesquisas | Procura tudo que tenha a letra [u] }>>

11 - db.clientes.find({nome: {$regex: /[au]/ } }).pretty() <<{ Verifica se existe a letra a ou u }>>

12 - db.clientes.find({idade: {$lt: 20} }) <<{ Maior que 20 }>>

13 - db.clientes.find({idade: {$gt: 20} }) <<{ Menor que 20 }>>

14 - db.clientes.find({idade: {$lte: 20} }) <<{ Maior ou igual a 20 }>>

15 - db.clientes.find({idade: {$gte: 20} }) <<{ Menor ou igual a 20 }>>

16 - db.clientes.find({idade: {eq: 20} }) <<{ igual a 20 }>>

17 - db.clientes.find({idade: {$ne: 20} }) <<{ diferente de 20 }>> 

18 - db.clientes.find({idade: {in: [20, 25,61,]} }) <<{ que contenha algum desses valores no array}>>

19 - db.clientes.find({idade: {all: [20, 25,61,]} 20} }) <<{ que contenha todos os valores do array }>>

20- db.clientes.find({}).skip(1) <<{ SKIP o valor passado no parametro define quantos elementos serão ignorados começando do primeiro }>>


21 - db.clientes.find({}).limit(2) <<{ Limita a quantidades de elementos/registros retornados }>>

22 - db.clientes.find({idade: {eq: 20} }).sort({-1}) <<{ No SORT o 1 aparece a consulta na ordem crescente e o -1 na ordem decrescente }>>

23 - db.clientes.updateOne({_id: ObjectId("5ae107e53faff568ef57661a")}, {$set: {nome: "Outro-Nome"} }) <<{ Atualiza o campo "nome:" }>>

24 - db.clientes.updateOne({_id: ObjectId("5ae107e53faff568ef57661a")}, {$unset: {nasc: null}}) <<{ O UNSET Elimina o campo ao add o valor null }>>

25 - db.clientes.updateOne({_id: ObjectId("5ae107e53faff568ef57661a")}, {$inc: {idade: 2}}) <<{ O INC incremata ou decrementa >>Ex:(-10)<< um valor númerico }>>

26 - db.clientes.updateOne({_id: ObjectId("5ae107e53faff568ef57661a")},{$mult: {idade: 3} }) <<{ O mult, multiplica ou divide o valor >>Ex:(1/3)<< }>>

27 - db.clientes.updateOne({_id: ObjectId("5ae107e53faff568ef57661a")},{$mult: {idade: 1/3} }) <<{ Divide por 3}>>

26 - db.clientes.updateOne({_id: ObjectId("5ae107e53faff568ef57661a")},{$rename: {nasc: nascimento} }) <<{ Atualiza o nome do campo }>> 

27 - db.clientes.updatesOne({nome:"emerson" },{nasc: "11-03-1992"},{upsert: true})  <<{ O UPSERT: TRUE procura os dados na collection para atualizar, caso não ache cria }>>

28- db.collection.drop() <<{ Remove uma coleção ou exibição do banco de dados }>>