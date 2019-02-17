class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}

export class Bowerman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name);
    this.type = 'Undead';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Zombie extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Zombie';
    this.attack = 10;
    this.defence = 40;
  }
}

export default Character;
