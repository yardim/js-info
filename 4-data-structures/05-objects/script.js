// ====================================
// isEmpty object

function isEmpty(obj) {
  for (const key in obj) {
    return false;
  }

  return true;
}

// const schedule = {};
// console.log(isEmpty(schedule));

// schedule['8:30'] = 'Get up!';
// console.log(isEmpty(schedule));



// ====================================
// properties sum

function sumProperties(obj) {
  let sum = 0;

  for (const key in obj) {
    sum += obj[key];
  }

  return sum;
}

const salaries = {
  // "Вася": 100,
  // "Петя": 300,
  // "Даша": 250
};

// console.log(sumProperties(salaries));



// ====================================
// get max property

function getMostRichBitch(obj) {
  let mostRichBitch = 'No employees';
  let biggestSalary = 0;

  for (const key in obj) {
    if (obj[key] > biggestSalary) {
      biggestSalary = obj[key];
      mostRichBitch = key;
    }
  }

  return mostRichBitch;
}

// console.log(getMostRichBitch(salaries));



// ====================================
// multiply numeric properties

function isNumeric(n) {
  return isFinite(parseFloat(n));
}

function multiplyNumeric(obj) {
  for (const key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] *= 2;
    }
  }
}

const menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);
