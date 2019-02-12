import Character from '../src/js/character.js';

describe('TEST: character inheritance', () => {
  test('1', () => {
    const character = new Character('Marck');
    const expected = {
      name: 'Marck',
      health: 100,
      level: 1,
    };

    expect(character).toEqual(expected);
  });
});
