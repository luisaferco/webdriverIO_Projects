function mapQuantity(numberItems) {
      return `QTY: ${numberItems}`
}

function currencyStringToNumber(currency) {
      return Number(currency.replace(/[^0-9\.]+/g,""));
}

function sumPrices(list, accumulator = 0){
     return list.reduce(add, accumulator)
      
}

function add(accumulator, a) {
      return accumulator + a;
    }

module.exports.mapQuantity = mapQuantity;
module.exports.currencyStringToNumber = currencyStringToNumber;
module.exports.sumPrices = sumPrices;