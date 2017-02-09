const {ObjectID} = require("mongodb");


const {mongoose} = require("../node-app-todo/server/db/mongoose");
const {Todo} = require("../node-app-todo/server/models/todos");
const {User} = require("../node-app-todo/server/models/users")

// var id = "589c91e03820090f6cf6701b";
var id ="589b8c0935909529e4f18208";

if(!ObjectID.isValid(id)) {
    console.log("ID not found");
}

User.findById(id).then((user) => {
    if(!user) {
        return ("No user with this id found");
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.log(e);
});

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

Todo.findById(id).then((todo)=> {
    if(!todo) {
        return console.log("Id was not found");
    }
    console.log("Todo by ID", todo);
}).catch ((e) => console.log(e));

