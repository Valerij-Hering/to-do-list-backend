const ToDoModel = require('./ToDoModel');

module.exports.getPlan = async(req, res) => {
    const myToDo = await ToDoModel.find();
    res.send(myToDo)
}

module.exports.savePlan = async(req, res) => {
    const { title } = req.body;
    ToDoModel.create({ title })
    .then((data) => {
        console.log('Plan added');
        res.send(data)
    })
}

module.exports.deletePlan = async(req, res) => {
    const { _id } = req.body
    ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a plan'))
}

module.exports.editPlan =async (req, res) => {
    const { _id, title } = req.body
    ToDoModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Edited a plan'))
}