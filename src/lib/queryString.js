const queryString = obj =>
  Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value == 'object' && !Array.isArray(value))
        throw new Error('Invalid params');
      return `${key}=${value}`;
    })
    .join('&');
module.exports.queryString = queryString;
