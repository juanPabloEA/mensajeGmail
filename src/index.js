const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const app = express();
const indexRoutes = require('./routes/index');
//const tasksRoutes = require('./routes/tasks');
const path = require('path');

//settings
/*app.set('views', path.join(__dirname, 'views'));
*/
 app.set('port', process.env.PORT || 3000);
/*
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');*/

//middlewarws
app.use(cors());
app.use(helmet());
app.use(helmet({
  frameguard: false
}))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
//app.use(indexRoutes);
//app.use('/api', tasksRoutes);
//solucionar problema de cors   

//static files
app.use(express.static(path.join(__dirname, 'dist')))


//start server
app.listen(app.get('port'), () => {
	console.log('server on port 3000')
});