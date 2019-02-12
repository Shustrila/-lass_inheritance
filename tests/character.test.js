import {
  Bowerman, Daemon, Magician, Swordsman, Undead, Zombie,
} from '../src/js/character.js';

describe('TEST: character inheritance', () => {
  test('class Bowerman character', () => {
    const character = new Bowerman('Marck');
    const expected = {
      name: 'Marck',
      health: 100,
      level: 1,
      type: 'Bowerman',
      attack: 25,
      defence: 25,
    };

    expect(character).toEqual(expected);
  });

  test('class Daemon character', () => {
    const character = new Daemon('Marck');
    const expected = {
      name: 'Marck',
      health: 100,
      level: 1,
      type: 'Daemon',
      attack: 25,
      defence: 25,
    };

    expect(character).toEqual(expected);
  });


  test('class Magician character', () => {
    const character = new Magician('Marck');
    const expected = {
      name: 'Marck',
      health: 100,
      level: 1,
      type: 'Magician',
      attack: 10,
      defence: 40,
    };

    expect(character).toEqual(expected);
  });


  test('class Swordsman character', () => {
    const character = new Swordsman('Marck');
    const expected = {
      name: 'Marck',
      health: 100,
      level: 1,
      type: 'Swordsman',
      attack: 40,
      defence: 10,
    };

    expect(character).toEqual(expected);
  });


  test('class Undead character', () => {
    const character = new Undead('Marck');
    const expected = {
      name: 'Marck',
      health: 100,
      level: 1,
      type: 'Undead',
      attack: 40,
      defence: 10,
    };

    expect(character).toEqual(expected);
  });


  test('class Zombie character', () => {
    const character = new Zombie('Marck');
    const expected = {
      name: 'Marck',
      health: 100,
      level: 1,
      type: 'Zombie',
      attack: 10,
      defence: 40,
    };

    expect(character).toEqual(expected);
  });
});
