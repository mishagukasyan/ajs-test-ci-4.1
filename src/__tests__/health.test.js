import checkPlayersHealts from '../js/health';

test('checking the health over 50', () => {
  expect(checkPlayersHealts({
    name: 'Маг',
    health: 90,
  })).toBe('healthy');
});

test('checking the health is 50', () => {
  expect(checkPlayersHealts({
    name: 'Маг',
    health: 50,
  })).toBe('wounded');
});

test('checking the health is less than 50 and more than 15', () => {
  expect(checkPlayersHealts({
    name: 'Маг',
    health: 30,
  })).toBe('wounded');
});

test('checking the health is 15', () => {
  expect(checkPlayersHealts({
    name: 'Маг',
    health: 15,
  })).toBe('wounded');
});

test('checking the health is less than 15', () => {
  expect(checkPlayersHealts({
    name: 'Маг',
    health: 10,
  })).toBe('critical');
});
