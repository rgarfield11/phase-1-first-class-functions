// callback function
function receivesAFunction(callback) {
    callback()
};

// return function
function returnsANamedFunction() {
    return function named(){
    };
};

// return anon function
function returnsAnAnonymousFunction() {
    return function () {
    }
}