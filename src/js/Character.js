export default class Character {
  constructor(name, type) {
    const chars = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!(typeof name === 'string' && name.length >= 2 && name.length <= 10)) {
      throw new Error('Имя персонажа не удовлетворяет заданным условиям (от 2 до 10 символов)');
    }

    if (!chars.includes(type)) {
      throw new Error(
        'Тип персонажа не удовлетворяет заданным условиям (Bowman, Swordsman, Magician, Daemon, Undead или Zombie)'
      );
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
