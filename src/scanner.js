export default class Scanner{
  constructor(string) {
    this.string = string;
    this.pos = 0;
    this.tail = string;
  }

  eos() {
    return this.tail === ''? false : true;
  }

  scan(reg) {
    let rel = this.tail.match(reg);
    if (!rel) {
      return '';
    }
    this.tail = this.tail.substring(rel[0].length);
    this.pos += rel[0].length;
    return rel[0];
  }

  scanUntil(reg) {
    let rel = this.tail.match(reg), qz;
    if (!rel) {
      qz = this.tail;
      this.tail = '';
    } else if (rel.index === 0) {
      qz = '';
    } else {
      qz = this.tail.substring(0, rel.index);
      this.tail = this.tail.substring(rel.index);
    }
    this.pos += qz.length;
    return qz;
  }
}