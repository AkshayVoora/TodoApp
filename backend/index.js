const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "Wrong inputs"
        })
        return;
    }
    await todo.create({
        tittle: createPayload.tittle,
        description: parsedPayload.tittle,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req,res){
    const todos = await todo.find()
    console.log(todos)
    res.json({
        todos
    })
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message: "Wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:updatePayload.id
    },{
        completed:true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})