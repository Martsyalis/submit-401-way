'use strict';

module.exports = {
    add :(x,y) =>{ 
        return x + y;
    },

    subtract : (x, y) => {
        return x - y;
    },

    multiply : (x, y) => {
        return  x * y;
    },

    divide : (x, y) => {
        throw new Error('should divide by 0'); 
        // return x / y;
    }
};
