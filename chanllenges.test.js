
const { calculatorTXT, TxTcalculatorTXT } = require('./index.js')

const file = './doc/Challenge21.txt'
const fileErr = './doc/tesChanllenge21.txt'

test('challenge.test.js', () => {
    expect(calculatorTXT(file)).toBe(-14)
    expect(calculatorTXT(null)).toBe(0)
    expect(calculatorTXT(fileErr)).toBe(0)
    expect(calculatorTXT('')).toBe(0)
    // expect(TxTcalculatorTXT(file)).toBe(-14)
});
