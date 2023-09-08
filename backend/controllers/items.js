const Todo = require("../models/todo");

const getTodos = async (req, res) => {
    const items = await Todo.find({});
    res.json({
        message: "all items",
        todos: items
    });
}

const getTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
}

const createTodo = async (req, res) => {
    const { text } = req.body;

    // Create new Todo object
    const newTodo = new Todo({
        text: text
    });

    // Save it to the database
    await newTodo.save();

    // Respond with the newly created todo
    res.status(201).json(newTodo);
}

const editTodo = async (req, res) => {
    const { id } = req.params;
    
    // Update the Todo and return the new version
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(updatedTodo);
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;

    await Todo.findByIdAndDelete(id);
    
    res.status(200).json({ message: "Todo deleted successfully" });
}

module.exports = {
    createTodo,
    getTodos,
    editTodo,
    deleteTodo,
    getTodo
}
