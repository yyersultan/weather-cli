import { homedir } from 'os';
import { join } from 'path'
import { promises } from 'fs'

const filePath = join(homedir(), 'weather-data.json');

const TOKEN_DICTOINARY = {
    token : 'token',
    city : 'city'
}

 const saveKeyValue = async (key,value) => {
    let data = {};
    if(await isExist(filePath)){
        const file_data = await promises.readFile(filePath);
        data = JSON.parse(file_data);
    }
    data[key] = value;
    await promises.writeFile(filePath,JSON.stringify(data));
}

const getKeyValue = async(key) => {

    if(await isExist(filePath)){
        const file_data = await promises.readFile(filePath);
        const data = JSON.parse(file_data);
        
        return data[key];
    }
    return undefined;
};

const isExist = async(path) => {
    try{
        await promises.stat(path);
        return true;
    }catch(e){
        return false;
    }
}

export {saveKeyValue,getKeyValue,TOKEN_DICTOINARY}

    // console.log(basename(filePath));
    // console.log(dirname(filePath));
    // console.log(extname(filePath));
    // console.log(relative(filePath,dirname(filePath)));
    // console.log(isAbsolute(filePath));
    // console.log(resolve('..'));