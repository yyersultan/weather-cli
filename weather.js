#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getIcon, getWeather } from "./services/api.service.js";
import {printError, printHelp, printSuccess, printWeather} from './services/log.services.js'
import { getKeyValue, saveKeyValue, TOKEN_DICTOINARY } from "./services/storage.service.js";


const saveToken = async(token) => {
    if(!token.length){
        printError("Token is not recieved");
        return;
    }
    try{
        await saveKeyValue(TOKEN_DICTOINARY.token,token);
        printSuccess('Token saved !!!');
    }catch(e){
        printError(e.messsage);
    }
}

const saveCity = async(city) => {
    if(!city.length){
        printError('City is not defined');
        return ;
    }
    try{
        await saveKeyValue(TOKEN_DICTOINARY.city,city);
        printSuccess('City saved !!!');
    }catch(e){
        printError(e.message);
    }
}   

const getForCast = async() => {
    try{
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTOINARY.city);
        const weather = await getWeather(city);
        printWeather(weather,getIcon(weather.weather[0].icon))
    }catch(e){
        if(e?.response?.status === 404){
            printError('Invalid city name')
        }else if(e?.response?.status === 401){
            printError('Invalid token')
        }else{
            printError(e.message)
        }
    }
    
}

const initCLI = () => {
   const args = getArgs(process.argv);
   console.log(process.env.TOKEN);
   if(args.h){
       return printHelp();
   }
   if(args.s){
       return saveCity(args.s);  
   }
   if(args.t){
        return saveToken(args.t);
        
   }
   return getForCast();
   // just return weather
}

initCLI();