import TodoModels from '../models/TodoModels'

module.exports.getTodos = async (req, res) =>{
    const toDos = await TodoModels.find()
    res, send(toDos)
}


module.exports.saveTodo = (req, res) =>{
    const {todo} = req.body ;

    TodoModels.create({todo}).then((data) =>{
        console.log("saved successfully...");
        res.status(201).send(data);

    })
    .catch ((err) => console.log(err));
};

