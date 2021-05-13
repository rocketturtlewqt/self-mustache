import lookup from './lookup';

export default function renderTemplate(tokens, data) {
  let resultStr = '';
  for (let i = 0, len = tokens.length; i < len; i++){
    let token = tokens[i];
    if (token[0] === 'text') {
      resultStr += token[1];
    } else if (token[0] === 'name') {
      resultStr += lookup(data, token[1]);
    } else {
      const dt = data[token[1]];
      if (dt.length) {
        for (let i = 0; i < dt.length; i++){
          resultStr += renderTemplate(token[4], dt[i]);
        }
      } else {
        resultStr += renderTemplate(token[4], dt);
      }
    }
  }
  return resultStr;
}