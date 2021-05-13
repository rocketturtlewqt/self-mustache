import parseTemplate from './parseTemplate';
import renderTemplate from './renderTemplate';

window.myMustache = {
  render(template, data) {
    let tokens = parseTemplate(template);
    let rel = renderTemplate(tokens, data);
    document.body.innerHTML=rel
  }
}