const fs = require('fs')
const path = require('path')

const dir = './question3/logs'
//create directory if doesn't exist
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
} 
//delete all the files from the directory
function clear(){
    fs.readdir(dir, (err, files) => {
    if (err) throw err;
        for (const file of files) {
            fs.unlink(path.join(dir, file), (err) => {
                if (err) throw err
                    console.log(file + " was deleted")
            })
        }
    })
}



//create logfiles
function create(){
    for(let i = 1; i<11;i++){
        fs.writeFile(`${dir}/log${i}.txt `, `This is log${i}.txt file`, (err) => {
            if (err) throw err
        })
        console.log(`log${i}.txt was created`)
    } 
}


clear()

setTimeout(create, 100)