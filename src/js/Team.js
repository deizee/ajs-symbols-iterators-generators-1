import Bowman from "./Bowman";
import Magician from "./Magician";
import Swordsman from "./Swordsman";
import Daemon from "./Daemon";

export default class Team {
  constructor() {
    this.bowman = new Bowman('Иван');
    this.magician = new Magician('Матильда');
    this.swordsman = new Swordsman('Бернард');
    this.daemon = new Daemon('Горыныч');
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    if (this.current === undefined) {
      this.current = 0;
    }

    if (this.current < Object.keys(this).length - 1) {
      return {
        done: false,
        value: Object.values(this)[this.current],
        current: this.current++
      };
    } else {
      delete this.current;
      return {
        done: true
      };
    }
  }
}
