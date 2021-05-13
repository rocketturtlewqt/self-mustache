import nestTokens from './nestTokens';
import Scanner from './scanner';

export default function parseTemplate(template) {
  let scanner = new Scanner(template);
  let tokens = [], ed = 0;
  const reg = /\{\{|\}\}/;
  while (scanner.eos()) {
    let rel1 = scanner.scanUntil(reg);
    let rel2 = scanner.scan(reg);
    // console.log('rel1---', rel1);
    // console.log('rel2---', rel2);
    if (rel2 === '}}') {      
      if (rel1[0] === '#') {
        tokens.push([
          '#',
          rel1.slice(1),
          ed,
          scanner.pos + 2
        ]);
      } else {
        tokens.push([
          rel1[0] === '/' ? '/' : 'name',
          rel1[0] === '/' ? rel1.slice(1) : rel1,
          ed,
          scanner.pos + 2
        ]);
      }
      ed = scanner.pos + 2;
    } else {
      tokens.push([
        'text',
        rel1,
        ed,
        scanner.pos
      ]);
      ed = scanner.pos;
    }
  }
  let rel = nestTokens(tokens, 0);
  tokens.forEach(x => {
    delete x.flag;
  });
  return rel;
}