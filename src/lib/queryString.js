const keyValueToString = ([key, value]) => {
  if (typeof value == 'object' && !Array.isArray(value))
    throw new Error('Invalid params');
  return `${key}=${value}`;
};

const queryString = obj => Object.entries(obj).map(keyValueToString).join('&');
module.exports.queryString = queryString;
