/*this is practice with chalk, you will need to install it with npm install chalk
console.log('Ellie');

const log = console.log;

import chalk from 'chalk';
log(chalk.blue.bgGreenBright.bold('Hello world!'));

log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

log(chalk.cyanBright(`

Ellie

`));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);*/
 import figlet from 'figlet';



figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
