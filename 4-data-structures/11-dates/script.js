// ==================================
// date creation

// const date = new Date(2012, 1, 20, 3, 12);
// console.log(date);



// ==================================
// get weekday

// function getWeekday(date) {
//   const day = date.getDay();
//   const weekdays = {
//     0: 'вс',
//     1: 'пн',
//     2: 'вт',
//     3: 'ср',
//     4: 'чт',
//     5: 'пт',
//     6: 'сб',
//   };

//   return weekdays[day];
// }

// const date = new Date();
// console.log(getWeekday(date));



// ==================================
// get euro day

// function getLocalDay(date) {
//   const localDays = [7, 1, 2, 3, 4, 5, 6];
//   const day = date.getDay();

//   return localDays[day];
// }

// const date = new Date();
// console.log(getLocalDay(date));



// ==================================
// get date ago

// function getDateAgo(date, days) {
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const oldDate = date.getDate();

//   return new Date(year, month, oldDate - days);
// }

// const date = new Date(2015, 0, 2);
// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));



// ==================================
// get last day of month

// function getLastDayOfMonth(year, month) {
//   return new Date(year, month + 1, 0).getDate();
// }

// console.log(getLastDayOfMonth(2012, 1));



// ==================================
// get amount of seconds today

// function getSecondToday() {
//   const accurateDate = new Date();
//   const dayStart = new Date(
//     accurateDate.getFullYear(),
//     accurateDate.getMonth(),
//     accurateDate.getDate(),
//   );
//   const diff = accurateDate - dayStart;

//   return Math.round(diff / 1000);
// }

// console.log(getSecondToday());



// ==================================
// get seconds to tomorrow

// function getSecondToTomorrow() {
//   const now = new Date();
//   const tomorrow = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate() + 1,
//   );
//   const diff = tomorrow - now;

//   return Math.floor(diff / 1000);
// }

// console.log(getSecondToTomorrow());



// ==================================
// format date

function addLeadingZero(num) {
  if (num < 10) {
    return `0${num}`;
  }

  return num;
}

function formatDate(date) {
  const year = addLeadingZero(date.getFullYear());
  const month = addLeadingZero(date.getMonth() + 1);
  const dayNum = addLeadingZero(date.getDate());

  return `${dayNum}.${month}.${year}`
}

// const d = new Date(2014, 0, 30);
// console.log(formatDate(d));



// ==================================
// relatively format date

function formatTime(date) {
  const hour = addLeadingZero(date.getHours());
  const minute = addLeadingZero(date.getMinutes());

  return `${hour}:${minute}`;
}

function relativelyFormatDate(date) {
  const now = new Date();
  const millisecondsDiff = now - date;
  const secondsDiff = Math.floor(millisecondsDiff / 1000);
  const minutesDiff = Math.floor(secondsDiff / 60);
  const hoursDiff = Math.floor(minutesDiff / 60);

  if (secondsDiff < 1) {
    return 'just now';
  }

  if (minutesDiff < 1) {
    return `${secondsDiff} sec ago`;
  }

  if (hoursDiff < 1) {
    return `${minutesDiff} min ago`;
  }

  return `${formatDate(date)} ${formatTime(date)}`;
}

console.log(relativelyFormatDate(new Date(new Date() - 1)));
console.log(relativelyFormatDate(new Date(new Date() - 30 * 1000)));
console.log(relativelyFormatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(relativelyFormatDate(new Date(new Date() - 86400 * 1000)));
