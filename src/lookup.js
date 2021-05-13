export default function lookup(data, keyName) {
  const index = keyName.search(/\./);
  if (index !== -1 && keyName.length === 1) {
    return data;
  } else {
    if (index === -1) {
      return data[keyName];
    } else {
      let str = keyName.slice(0, index);
      return lookup(data[str], keyName.slice(index + 1));
    }
  }
}