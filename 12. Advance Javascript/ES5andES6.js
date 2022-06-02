//destructuring
const obj = {
    player: "Aniket",
    age: 34,
    game: "Cricket"
};

const {player, age, game} = obj;
console.log(player, age, game);


//------------------------------
// dynamic properties
const species = "human";
const obj1 = {
    [species]: "Aniket",
    [3+1]: 34
};
obj1;


//-------------------------------
// Template strings

let name = "Aniket";
const h = `My name is ${name}!`
console.log(h);


//Default arguments
function def(name='Ani', age=10){
    return `Hello! I am ${name}. My age is ${age}`;
}

// arrow functions

const add = (a,b)=> {
    return a+b;
}
const sub = (a,b) => a-b; 

add;