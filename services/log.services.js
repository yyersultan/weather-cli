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

export {printError,printSuccess,printHelp};