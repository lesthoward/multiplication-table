const {writeSum} = require('./helpers/filesGenerator')
const argv = require('./config/yargs')

require('colors')

console.clear()

// Tomar los argumentos de la terminal a la hora de ejecutar el archivo node "filename" --numberBase=30
// const [ , , arg3 = 'numberBase=50'] = process.argv
// const [ , numberBase] = arg3.split('=')
// console.log(process.argv);

// Write files using yargs package
writeSum( argv.numberBase, argv.showOnTerminal, argv.limit )
    .then(filename => console.log(`${filename.random}, has been created.`.bold))
    .catch(err => console.log(err))