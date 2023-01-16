function extractValue(arr, key) {
  return arr.reduce(function (accumulator, nextValue) {
    accumulator.push(next[key]);
    return accumulator;
  });
}

function vowelCount(str) {
  const vowels = "aeiou";
  return str.split("").reduce(function (accumulator, nextValue) {
    let lowerCased = nextValue.toLowerCase();
    if (vowels.indexOf(lowerCased) !== -1) {
      if (accumulator[lowerCased]) {
        acc[lowerCased]++;
      } else {
        acc[lowerCased] = 1;
      }
    }
    return accumulator;
  });
}

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (accumulator, nextValue, idx) {
    accumulator[idx][key] = value;
    return accumulator;
  }, arr);
}

function partition(arr, callback) {
  return arr.reduce(
    function (accumulator, nextValue) {
      if (callback(nextValue)) {
        accumulator[0].push(next);
      } else {
        accumulator[1].push(next);
      }
      return accumulator;
    },
    [[], []]
  );
}
