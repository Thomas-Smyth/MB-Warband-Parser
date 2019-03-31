const encode = require('./index').encode;
const decode = require('./index').decode;

const decodeTest = 'var1|var2|var3|var4|var5|var6|var7|var8|var9|var10|| |1|2|3|4';
const encodeTest = [
    'var1',
    'var2',
    'var3',
    'var4',
    'var5',
    'var6',
    'var7',
    'var8',
    'var9',
    'var10',
    '',
    ' ',
    '1',
    '2',
    '3',
    '4'
];

test('should encode array to M&B:Warband formatted string', () => {
    expect(encode(encodeTest)).toBe(decodeTest);
});

test('should decode M&B:Warband formatted string to array', () => {
    expect(decode(decodeTest)).toEqual(encodeTest);
});