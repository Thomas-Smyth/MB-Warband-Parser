const Parser = require('../index');

const decodeTest = "var1|var2|var3|var4|var5|var6|var7|var8|var9|var10|| |1|2|3|4";
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

function compareArrays(arr1, arr2){
    if ( arr1.length !== arr2.length ) return false;

    for( let i = 0; i < arr1.length; i++ ) {
        if(arr1[i] !== arr2[i]) return false;
    }

    return true;
}

async function runTest(){
    console.log('---- Running Tests ----');
    let pass = true;

    let decodeOutput = await Parser.decode(decodeTest);
    let encodeOutput = await Parser.encode(encodeTest);

    if ( compareArrays(decodeOutput, encodeTest) ){
        console.log('Decode Test Pass');
    } else {
        console.log('Decode Test Fail');
    }

    if ( encodeOutput === decodeTest ) {
        console.log('Encode Test Pass');
    } else {
        console.log('Encode Test Fail');
    }

    if(pass) console.log('---- Test Passed ----');
    else console.log('---- Test Failed ----');
}

runTest();