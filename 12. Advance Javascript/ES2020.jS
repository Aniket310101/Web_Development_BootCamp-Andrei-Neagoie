//Bigint
let v = 3n;
typeof(v);

//optional chaining operator ?.
const obj = {
    person: {
        name: "Ani",
        roll: 23
    }
};

let ans = obj?.person?.roll;
console.log(ans);


//Nullish Coalescing Operator
// works more or less as a OR operator

const obj1 = {
    person: {
        name: "Ani",
        roll: 0
    }
};
let a = obj1?.person?.roll ?? "No roll number!";
console.log(a);

let b = obj1?.person?.roll || "No roll number!";    //check the difference between || and ??   
console.log(b);
