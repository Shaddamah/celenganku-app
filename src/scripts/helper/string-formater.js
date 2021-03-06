const StringFormater = {
  convertToCashFormat: (string) => {
    const reverse = string.toString().split('').reverse().join('')
    let cash = reverse.match(/\d{1,3}/g)
    cash = cash.join('.').split('').reverse().join('')

    return cash
  },
  convertCasttoInt: (cash) => {
    let integer = cash.replaceAll('.', '')
    // eslint-disable-next-line radix
    integer = +integer
    return integer
  },
}
export default StringFormater
