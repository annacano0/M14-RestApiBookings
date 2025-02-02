import express from 'express'
import bodyParser from 'body-parser'
import * as usersController from './src/controllers/usersController.js'

//generate express app
const app = express();

//parse data to JSON
app.use(bodyParser.json())

/*initialize server*/
app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

/*configure endpoint*/
app.get('/', (req, res) => {
    res.send('Hello World')
});

/*users*/
app.get('/users', (req, res) => { 
    usersController.getAllUsers(req, res)
});

