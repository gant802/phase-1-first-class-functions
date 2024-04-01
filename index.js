function receivesAFunction(thing) {
    thing();
}

function thing() {
    console.log("Hello, World!");
}

receivesAFunction(thing());

function returnsANamedFunction() {
    return function hello() {
        return "hello";
    };
};

function returnsAnAnonymousFunction() {
    return function() {console.log("anon")};
}