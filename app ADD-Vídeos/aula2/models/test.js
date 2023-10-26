const { query } = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);


// findOne
async function findOne(id) {
  try {
    const database = client.db("aula02");
    const users = database.collection("users");

    // Query for a user that has the nome 'Emerson                          '
    const query = { _id: new ObjectId(id) };
    const user = await users.findOne(query);

    // since this method returns the matched document, not a cursor, print it directly
    return user;

  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

// find()
async function find(params) {
  if (params == null) {
    try {
      const database = client.db('aula02');
      const users = database.collection('users');

      const res = await users.find().toArray();

      return res

    } catch (error) {
      console.log(error)
    } finally {
      await client.close()
    }
  } else {
    try {
      const database = client.db('aula02');
      const users = database.collection('users');

      const query = params;
      const res = await users.find(query).toArray();

      return res

    } catch (error) {
      console.log(error)
    } finally {
      await client.close()
    }
  }
}


// insert()
async function insert(params) {
  try {
    const database = client.db('aula02');
    const users = database.collection('users');

    const query = params;
    const res = await users.insertOne(query);
    // console.log("ok");
    return res;
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

// updateOne()
async function update(id, param) {
  try {
    const database = client.db('aula02');
    const users = database.collection('users');

    const filter = {_id: new ObjectId(id)}
    const updateDoc = param

    // console.log(params);
    const res = await users.updateOne(filter, updateDoc);
    console.log("ok");
    return res;
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}


// TESTES

// (async () => {
//   let id = '63e840f5defa206c918ffb7d';
//   let nome;
//   const query = {$set: {nome: "Bruna Gabrielle"},};

//   const res = await update(id, query);
//   console.log(res);
// })();


(async () => {
  let id = '63eb95326f6a1e9f781730e9';
  const query = {nome: "José Luiz"};

  const res = await find();
  console.log(res);
})();