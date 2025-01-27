import express from 'express'
import bodyParser from 'body-parser'
import {readData, writeData} from './utils/fileUtils.js'

//generate express app
const app = express();

//parse data to JSON
app.use(bodyParser.json())

/*configure endpoint*/
app.get('/', (req, res) => {
    res.send('Hello World')
});

/*initialize server*/
app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

/*users*/
app.get('/users', (req, res) => { //TODO: move this to a controller folder and userController file
    const data = readData("users");
    console.log(data);
    res.json(data);
});

