const encoder = require('../encoder')

test('encode string gggaaagggeee', () => {
    expect(encoder('gggaaagggeee')).toBe('g3a3g3e3');
});