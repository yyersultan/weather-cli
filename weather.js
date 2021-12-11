#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import {printError, printHelp, printSuccess} from './services/log.services.js'
import { saveKeyValue, TOKEN_DICTOINARY } from "./services/storage.service.js";


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


const initCLI = () => {
   const args = getArgs(process.argv);
   console.log(process.env);
   if(args.h){
       printHelp();
   }
   if(args.s){
       
       printSuccess();  
   }
   if(args.t){
        return saveToken(args.t);
        
   }
   getWeather('temirlanovka');
   // just return weather
}

initCLI();