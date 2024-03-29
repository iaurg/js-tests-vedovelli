const keyValueToString = ([key, value]) => {
  if (typeof value == 'object' && !Array.isArray(value))
    throw new Error('Invalid params');
  return `${key}=${value}`;
};

export const queryString = obj =>
  Object.entries(obj).map(keyValueToString).join('&');

export const parse = queryString =>
  Object.fromEntries(
    queryString.split('&').map(item => {
      let [key, value] = item.split('=');

      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }

      return [key, value];
    }),
  );
