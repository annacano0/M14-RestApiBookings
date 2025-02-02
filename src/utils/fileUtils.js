import fs from 'node:fs'

export const readData = (selectedModel) =>{
    try{
        const data= fs.readFileSync(`./src/dataSource/${selectedModel}.json`)
        console.log(data)
        return JSON.parse(data)
    }catch(err){
        console.log(err)
    }
}

export const writeData = (selectedModel, data) =>{
    try{
        fs.writeFileSync(`./src/dataSource/${selectedModel}.json`, JSON.stringify(data))
    }catch{
        console.log(err)
    }
}

