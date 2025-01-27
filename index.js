import express from 'express'
import bodyParser from 'body-parser'

//generate express app
const app = express();

//parse data to JSON
app.use(bodyParser.json())