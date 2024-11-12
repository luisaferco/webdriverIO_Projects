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

const _mapQuantity = mapQuantity;
export { _mapQuantity as mapQuantity };
const _currencyStringToNumber = currencyStringToNumber;
export { _currencyStringToNumber as currencyStringToNumber };
const _sumPrices = sumPrices;
export { _sumPrices as sumPrices };