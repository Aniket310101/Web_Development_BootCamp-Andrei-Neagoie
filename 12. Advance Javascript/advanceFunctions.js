//CLOSURES

const fun1 = () => {
    const val = "inside fun1.";
    const fun2 = () => {
        console.log(val);
    };
    return fun2;
};

const a = fun1();
a();


// CURRYING
const mult = (n1) => (n2) => n1*n2;  //using closures
const multBy5 = mult(5);
multBy5(5);
//or we can also do
// mult(5)(6) --> output = 30
//---------------------------------

const multAlt = function(n1){  //same above function but without using arrow functions for simple understanding
    return function(n2){
        return n1*n2;
    }
}
const multBy2 = multAlt(2);
multBy2(5);


// COMPOSE
const comp = (f, g) => (n) => f(g(n));

const sum = (num) => num+1;

comp(sum, sum)(5);