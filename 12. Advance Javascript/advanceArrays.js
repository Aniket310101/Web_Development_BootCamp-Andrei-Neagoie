let ar = [1, 2, 6, 10];

//forEach
ar.forEach((val, index)=>{
    console.log(index, val);
});

//map
let map = ar.map((val)=>{
    return val*2;
});
map;

//filter
let filter = ar.filter((val)=>{
    return val>5;
});
filter;

//reduce
let reduce = ar.reduce((accumulator, val)=>{
    return accumulator + val;
}, 0);
reduce;