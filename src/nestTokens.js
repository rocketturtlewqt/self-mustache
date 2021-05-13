export default function nestTokens(tokens, pos) {
  let rel = [];
  for (let i = pos; i < tokens.length; i++){
    let token = tokens[i];
    if (token.flag) continue;
    token.flag = true;
    if (token[0] === '#') {
      let son = nestTokens(tokens, i + 1);
      token.push(son);
      rel.push(token);
    } else if (token[0] === '/') {
      return rel;
    } else {
      rel.push(token);
    }
  }
  return rel;
}