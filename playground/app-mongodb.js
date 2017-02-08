
//const MongoClient = require ("mongodb").MongoClient;

const {MongoClient, ObjectID} = require ("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
   if(err) {
       return console.log("Unable to connect to MongoDB server");
   }
   console.log("Connected to MongoDB server");

    // db.collection("Todos").find({_id: new ObjectID("589a2a09b5bf2a1238e80fc7")}).toArray().then((docs)=> {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     if (err){
    //         return console.log("Unable to fetch db", err);
    //     }
    // });

    // db.collection("Todos").find().count().then((count) =>{
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     if (err) {
    //         return console.log("Error can't count todos", err);
    //     }
    // });

    db.collection("Users").find({name: "User1"}).toArray().then((docs) => {
        console.log("docs with User1");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        if (err) {
            return console.log("Can't fetch users User1", err);
        }
    });

 //db.close();

});

