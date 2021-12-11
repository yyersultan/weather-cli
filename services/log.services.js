import chalk from 'chalk';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}

const printSuccess = (success) => {
    console.log(chalk.bgGreen(' SUCCESS ')+ ' ' + success);
}

const printHelp = () => {
    console.log(`
${chalk.bgCyan(' HELP ')} 
Without paramter - enter weather
-s [CITY] to set city
-h enters help
-t [API_KEY] to store token 
    `);
}
const printWeather = (response,icon) => {
    console.log(`
${chalk.bgYellow('WEATHER')} Weather in city: ${response.name}
${icon}  ${response.weather[0].description} 
Temperature: ${response.main.temp} (feels like ${response.main.feels_like})
Humidity: ${response.main.humidity}%
Wind Speed: ${response.wind.speed}m/s
`);
}
export {printError,printSuccess,printHelp,printWeather};