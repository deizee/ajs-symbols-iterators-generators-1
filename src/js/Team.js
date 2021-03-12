import Bowman from './Bowman';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Daemon from './Daemon';

export default class Team {
  constructor() {
    this.team = [
      new Bowman('Иван'),
      new Magician('Матильда'),
      new Swordsman('Бернард'),
      new Daemon('Горыныч'),
    ];
  }

  [Symbol.iterator]() {
    let current = 0;
    const { team } = this;
    return {
      next() {
        const res = {
          done: current >= team.length,
          value: team[current],
        };
        current++;
        return res;
      },
    };
  }
}
