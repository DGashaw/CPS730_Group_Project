const db = require('../persistence');

module.exports = async (req, res) => {    
    if(req.body.priority !== undefined) {
        console.log("IT WORKS!!");
        
        await db.updateItem(req.params.id, {
            name: req.body.name,
            priority: req.body.priority,
            completed: req.body.completed,
        });
    }

    else if(req.body.dueDate !== undefined) {
        await db.updateItem(req.params.id, {
            name: req.body.name,
            dueDate: req.body.dueDate,
            completed: req.body.completed,
        });
    }

    else if(req.body.category !== undefined) {
        await db.updateItem(req.params.id, {
            name: req.body.name,
            category: req.body.category,
            completed: req.body.completed,
        });
    }
    
    else{
        await db.updateItem(req.params.id, {
            name: req.body.name,
            completed: req.body.completed,
        });
    }
    
    const item = await db.getItem(req.params.id);
    res.send(item);
};
