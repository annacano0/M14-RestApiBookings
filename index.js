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

/*******************users*****************/

app.get('/users', (req, res) => { 
    usersController.getAllUsers(req, res)
});

app.get('/users/:id', (req, res) => { 
    usersController.getUserById(req, res)
});

app.post('/users', (req, res) => { 
    usersController.addUser(req, res)
});

app.put('/users/:id', (req, res) => { 
    usersController.updateUser(req, res)
});

app.delete('/users/:id', (req, res) => { 
    usersController.deleteUser(req, res)
});
