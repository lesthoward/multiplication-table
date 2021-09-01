const argv = require('yargs')
    .options('numberBase',{
        alias: 'n',
        describe: 'Generate a multiplication table file based on number',
        type: 'number',
        demandOption: true,
        default: 10
    })
    .options('showOnTerminal',{
        alias: 's',
        describe: 'Make a console.log on the terminal',
        type: 'boolean',
        default: false
    })
    .options('limit',{
        alias: 'l',
        describe: 'The number of times is going to be multiplied',
        type: 'number',
        default: 10
    })
    .check((argv, options) => {
        if(isNaN(argv.numberBase)) {
            throw 'You must to introduce a number'
        }
        return true
    })
    .argv

module.exports = argv