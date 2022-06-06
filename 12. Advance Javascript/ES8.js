const obj = {
    user1: "Aniket",
    user2: "Rahul",
    user3: "Sanjay"
}

Object.keys(obj).forEach((key, index)=>{
    console.log(index, key);
})

Object.values(obj).forEach((val, index)=>{
    console.log(index, val);
})

Object.entries(obj).forEach((val)=>{
    console.log(val);
})