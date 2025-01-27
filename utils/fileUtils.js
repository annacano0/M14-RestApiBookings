export const readData = (selectedModel) =>{
    try{
        const data= fs.readFileSync(`./dataSource/${selectedModel}.json`)
        console.log(data)
        return JSON.parse(data)
    }catch(err){
        console.log(err)
    }
}

export const writeData = (selectedModel, data) =>{
    try{
        fs.writeFileSync(`dataSource/${selectedModel}.json`, JSON.stringify(data))
    }catch{
        console.log(err)
    }
}

