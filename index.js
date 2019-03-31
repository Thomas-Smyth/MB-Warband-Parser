module.exports = {
    encode: function (input){
        if (! Array.isArray(input) ) {
            throw 'Input should be an array!';
        }
        return input.join('|');
    },
    decode: function (input){
        if ( typeof input !== 'string' ) {
            return 'Input should be a string!';
        }
        return input.split('|');
    }
};