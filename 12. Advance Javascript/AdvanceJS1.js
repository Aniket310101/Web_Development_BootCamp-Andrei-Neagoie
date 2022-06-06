// pass by value
let a = 1;
let b = a;
b++; 
console.log(a, b);

// pass by reference (always with object and arrays)

//objects
const obj = {
    user: "abc",
    pass: 1234
};

const obj1 = obj;
obj1.user = "hello";
console.log(obj);
console.log(obj1);

//arrays
const arr = [1,2,3,4,5];
const arr1 = arr;
arr[1] = 1234;
console.log(arr);
console.log(arr1);


//pass by value arrays
const arr = [1,2,3,4,5];
const arr2 = [].concat(arr);
arr2[1] = 34232;
console.log(arr);
console.log(arr1);


//pass by value objects

const obj2 = Object.assign({},obj); 
//OR
//const obj2 = {...obj}   
obj2.user = "noivce!";
console.log(obj);
console.log(obj2);


// deep copy of an object
let object = {
    a:"a",
    b:"b",
    c: {
        num: 12
    }
};


let clone = Object.assign({},object);  //shallow copy
object.c.num = "AHHH";
console.log(object);
console.log(clone);


let superclone = JSON.parse(JSON.stringify(object));  //deep copy
object.c.num = "35";
console.log(object);
console.log(superclone);