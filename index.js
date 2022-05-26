const fs = require('fs')
/**
 * 
 * @param {string} file 
 * @return {string}
 */

// method async
const calculatorTXT = (file) => {

    if (!file) return 0
    try {

        const operation = fs.readFileSync(file, { encoding: "utf-8" }).split('\n').join('')
        const result = eval(operation)
        console.log(result)
        return result

    } catch (err) {

        console.log(`formato txt no es corecto`)
        console.log("Error: ", err.message)
        return 0
    }
}
/*
  -- other method sync --
function TxTcalculatorTXT(file) {
    fs.readFile(file, 'utf-8', (err, data) => {

        if (err) {
            console.log("Error: ", err)
        }
        const result = eval(data.split('\n').join(''))
        console.log(result)
    })
}
*/
module.exports.calculatorTXT = calculatorTXT