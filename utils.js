const utils = {
  generateId: () => Math.floor(Math.random() * 10000).toString(),
  findById: (arr, id) => arr.find((obj) => obj.id === id),
  filterWithKey: (arr, key, id) => arr.filter((obj) => obj[key] === id),
  filterWithoutId: (arr, id) => arr.filter((obj) => obj.id !== id),
};

module.exports = utils;
