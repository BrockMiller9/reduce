function findUserByUsername(arr, key) {
  return arr.find(function (name) {
    return name.key === key;
  });
}

function removeUSer(arr, username) {
  let found = arr.findIndex(function (name) {
    return name.username === username;
  });
  if (found === -1) return;
  return usersArray.splice(foundIndex, 1)[0];
}
