function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(val * 2);
  });
  return newArr;
}

function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}

function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(val.charAt(0));
    newArr.push(val.charAt(val.length - 1));
  });
  return newArr;
}

function addKeyandValue(arr, key, value) {
  arr.forEach(function (val) {
    val[key] = value;
  });
  return arr;
}

function vowelCount(str) {
  let splitArr = str.split("");
  let obj = {};
  const vowels = "aeiou";
  splitArr.forEach(function (letter) {
    let lowerCasedLetter = letter.toLowerCase();
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}

function doubleValuesWithMap(arr) {
  return arr.map(function (value) {
    return value * 2;
  });
}

function valTimesIndex(arr) {
  return arr.map(function (value) {
    return value * arr.indexOf(value);
  });
}

function extractKey(arr, key) {
  return arr.map(function (value) {
    return value[key];
  });
}

function extractFullName(arr) {
  return arr.map(function (value) {
    return `first: ${value.first} ${value.last}`;
  });
}

// const longWords = words.filter(function (word) {
//   return word.length >= 20;
// });

function filterByValue(arr, key) {
  return arr.filter(function (value) {
    return value[key] !== undefined;
  });
}

function find(arr, value) {
  return arr.filter(function (val) {
    return val === value;
  });
}

function findInObj(arr, key, value) {
  return arr.filter(function (val) {
    return val[key] === value;
  })[0];
}

function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function (val) {
      return vowels.indexOf(val) === -1;
    })
    .join("");
}

function doubleOddNumbers(arr) {
  return arr
    .filter(function (val) {
      return val % 2 !== 0;
    })
    .map(function (num) {
      return num * 2;
    });
}
