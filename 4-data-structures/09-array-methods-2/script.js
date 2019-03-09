// ============================
// for to map

// const arr = ["Есть", "жизнь", "на", "Марсе"];
// const result = arr.map((item) => item.length);

// console.log(result);



// ============================
// getSums

const arr = [1, 2, 3, 4, 5];

function getSums(arr) {
  return arr.reduce((sumsArr, curRegularValue, index, currArr) => {
    let sum = curRegularValue;

    if (sumsArr.length) {
      sum = currArr
        .slice(0, index + 1)
        .reduce((prevSum, currValue) => prevSum + currValue);
    }

    sumsArr.push(sum);
    return sumsArr;
  }, []);
}

console.log(getSums(arr));