import getLevel from '../getlevel.js';
import fetchData from '../http.js';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('test call fetchData', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 55 });
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('test returned level', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 55 });
  const returnedLevel = getLevel(1);
  expect(returnedLevel).toBe('Ваш текущий уровень: 55');
});

test('test error response', () => {
  fetchData.mockReturnValue({ status: 'error' });
  const returnedLevel = getLevel(1);
  expect(returnedLevel).toBe('Информация об уровне временно недоступна');
});
