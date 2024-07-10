function receivesAFunction(callback) {
    callback();
}
receivesAFunction(callback)
function returnsANamedFunction() {
    return function namedFunction() {
    };
}
returnsANamedFunction()
function returnsAnAnonymousFunction() {
    return function() {
    };
}
returnsAnAnonymousFunction()