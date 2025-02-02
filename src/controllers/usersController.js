import {readData, writeData} from '../utils/fileUtils.js'

export function getAllUsers(req, res){
    try{
        const users = readData('users')
        res.send(users)
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
}

export function getUserById(req, res){
    try{
        const users = readData('users')
        const user = users.find(user => user.id === req.params.id)
        if (!user) return res.status(404).send("User not found");
        res.send(user)
    }catch(err){
        console.log(err)
        res.status(500).send("Internal Server Error");
    }
}

export function addUser(req, res){
    try{
        const users = readData('users')
        const newUser = { id: uuidv4(), ...req.body };
        users.push(newUser)
        writeData('users', users)
        res.status(201).json(newUser);
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
}

export function updateUser(req, res){
    try{
        const users = readData('users')
        const userIndex = users.findIndex(user => user.id === req.params.id)
        users[userIndex] = {...users[userIndex], ...req.body}
        writeData('users', users)
        res.send(users)
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
}

export function deleteUser(req, res){
    try {
        const users = readData('users');
        const newUsers = users.filter(user => user.id !== req.params.id);
        if (users.length === newUsers.length) return res.status(404).send("User not found");
        writeData('users', newUsers);
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}