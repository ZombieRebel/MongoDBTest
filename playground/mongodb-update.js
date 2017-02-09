
//const MongoClient = require ("mongodb").MongoClient;

const {MongoClient, ObjectID} = require ("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
   if(err) {
       return console.log("Unable to connect to MongoDB server");
   }
   console.log("Connected to MongoDB server");

   db.collection("Todos").findOneAndUpdate({
       _id: new ObjectID("589a2a09b5bf2a1238e80fc7")
   }, {
       $set: {
           text: "Vipolneno"
       }
   }, {
            returnOriginal: false
    }).then((result) => {
        console.log(result);
});

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("589b4dbb6d31e123e872304f")
    }, {
        $set: {
            name: "Bitch"
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    db.collection("Users").findOneAndUpdate({_id: new ObjectID("589b4dbb6d31e123e872304f")}, {
        $inc: {
            age:2
        }
    }, {
        returnOriginal: false
    }).then((result)=> {
        console.log(result);
    });
 //db.close();

});

