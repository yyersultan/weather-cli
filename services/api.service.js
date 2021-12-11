import axios from "axios"
import https from 'https';
import { getKeyValue, TOKEN_DICTOINARY } from "./storage.service.js";

const getWeather = async(city) => {
    
    const token = await getKeyValue(TOKEN_DICTOINARY.token);
    
    if(!token) {
        throw new Error('API KEY(token) is not defined,to put API KEY use -t in CLI');
    }

    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather`,{
        params : {
            q: city,
            appid : token,
            lang : 'ru',
            units : 'metric'
        }
    });
    return data;
    // const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    // url.searchParams.append('q',city);
    // url.searchParams.append('appid',token);
    // url.searchParams.append('lang','ru');
    // url.searchParams.append('units','metric');

    // https.get(url, (response) => {
    //     let res = '';
    //     response.on('data' , (chunk) => {
    //         res += chunk
    //     });
    //     response.on('end', () => {
    //         console.log(res);
    //     });
    //     response.on('error',(e) => {
    //         console.log(e);
    //     })
    // })
}

export { getWeather }