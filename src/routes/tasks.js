const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-db', ['tasks']);
router.get('/tasks', (req,res, next) => {
	db.tasks.find((err, task) =>{
		if(err) return next(err);
		res.json(tasks);
	});
});
router.get('/tasks/:id', (req,res, next) => {
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},(err, task) =>{
		if(err) return next(err);
		res.json(task);
	});
});

router.post('/tasks', (req, res, next) =>{
	const task = req.body;
	if(!task.title || !(task.isDone + '')){
		res.status(400).json({
			error: 'Bad data'
		});
	} else { 
		bd.tasks.save(task, (err, task) => {
			if(err) return next(err);
			res.json(task);
		})
	}
});
router.delete('/task/:id', (req, res, next) => {
	db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, result) =>{
		if(err) return next(err);
		res.json(result);
	});
});
router.put('/tasks/:id', (req, res, next) => {
	const task = req.body;
	const updateTask = {};
	if(task.idDone){
		updateTask.isdone = task.idDone;
	}
	if(task.title){
		updateTask.title = tasks.title;
	}
	if(!updateTask){
		res.status(400).json({
			error: 'Bad Request'
		});
	}else {
		db.tasks.update({__id: mongojs.ObjectId(req.params.id)}, (err, task) =>{
			if(err) return next(err);
			res.json(task);
		});
	}
});
module.exports = router;
