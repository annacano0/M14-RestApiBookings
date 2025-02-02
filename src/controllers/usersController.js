import {readData, writeData} from '../utils/fileUtils.js'

export function getAllUsers(req, res){
    try{
        const users = readData('users')
        res.send(users)
    }catch(err){
        console.log(err)
    }
}