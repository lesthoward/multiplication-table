const fs = require('fs')
const colors = require('colors')
const writeSum = async (number, showOnTerminal, limit) => {
    try {
        let output = ''
        let terminal = ''
        for (let i = 1; i <= limit ; i++) {
            const result = number * i
            output += `${number} * ${i} = ${result}\n`
            terminal += `${number} ${'*'.black.bold} ${i} = ${result.toString().blue.bold}\n`
        }

        // Terminal Parameter -showOnTerminal -s
        if(showOnTerminal) {
            console.log('==========================='.green.bold);
            console.log(`        Table:`, number);
            console.log('==========================='.green.bold);
            console.log(terminal);
        }
       

        // To handle erros, this have to be wrapped into try catch
        fs.writeFileSync(`./filesGenerated/${number}-table.txt`, output)
        return `${number}-table.txt`
    } catch (error) {
        throw error
    }
}

module.exports = {
    writeSum
}