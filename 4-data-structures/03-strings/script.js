// ==================================
// First uppercase

// function ucFirst(str) {
//   if (!str.length) return;

//   var firstSymbol = str[0].toUpperCase();
  
//   return firstSymbol + str.slice(1);
// }

// var res = ucFirst('vasya');
// console.log(res);



// ==================================
// Check spam

// function checkSpam(str) {
//   var lowerCasedStr = str.toLowerCase();
//   var isViagraPresent = lowerCasedStr.indexOf('viagra') >= 0;
//   var isXxxPresent = lowerCasedStr.indexOf('xxx') >= 0;

//   return isViagraPresent || isXxxPresent;
// }

// var isSpam = checkSpam('there is Viagra');
// console.log(isSpam);

// isSpam = checkSpam('viagra');
// console.log(isSpam);

// isSpam = checkSpam('XxX');
// console.log(isSpam);

// isSpam = checkSpam('no spam');
// console.log(isSpam);

// isSpam = checkSpam('');
// console.log(isSpam);




// ==================================
// truncate

// function truncate(str, maxLength) {
//   if (str.length > maxLength) {
//     return str.slice(0, maxLength - 3) + '...';
//   }

//   return str;
// }

// var truncated = truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
// console.log(truncated);

// truncated = truncate("Всем привет!", 20);
// console.log(truncated);



// ==================================
// extract currency value

function extractCurrencyValue(str) {
  var value = parseInt(str);

  if (!isNaN(value)) {
    return value;
  }

  var position = 0;

  for (; position < str.length; position++) {
    if (!isNaN(str[position])) {
      break;
    }
  }

  var strNumber = str.slice(position);

  return parseInt(strNumber);
}

var currencyValue = extractCurrencyValue('$120');
console.log(currencyValue);

currencyValue = extractCurrencyValue('120грн');
console.log(currencyValue);

currencyValue = extractCurrencyValue('$120грн');
console.log(currencyValue);