module.exports.decode = (input) => {
    return new Promise( ( resolve, reject ) => {
        if ( typeof input !== 'string' ) {
            return reject( new Error('Input should be a string!') );
        }
        return resolve( input.split('|') );
    })
};

module.exports.encode = (input) => {
    return new Promise( ( resolve, reject ) => {
        if (! Array.isArray(input) ) {
            return reject( new Error('Input should be an array!') );
        }
        return resolve( input.join('|') );
    });
};