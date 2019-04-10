'use strict';

// ===============================
// polymorphic date formatting

function addLeadingZero(num) {
  if (num < 10) {
    return '0' + num;
  }

  return num.toString();
}

function combineDateParts(date) {
  const year = addLeadingZero(date.getFullYear()).slice(2);
  const month = addLeadingZero(date.getMonth() + 1);
  const day = addLeadingZero(date.getDate());

  return `${day}.${month}.${year}`;
}

function formatDate(date) {
  const fullType = {}.toString.call(date);
  const type = fullType.slice(8, -1);

  if (type === 'Date') {
    return combineDateParts(date);
  }

  let dateObj;

  if (Array.isArray(date)) {
    dateObj = new Date(date[0], date[1], date[2]);
    return combineDateParts(dateObj);
  }

  if (typeof date === 'string') {
    dateObj = new Date(date);
    return combineDateParts(dateObj);
  }

  if (typeof date === 'number') {
    dateObj = new Date(date * 1000);
    return combineDateParts(dateObj);
  }
}

console.log(formatDate(new Date()));
console.log(formatDate('2011-10-02'));
console.log(formatDate(1234567890));
console.log(formatDate([2014, 0, 1]));