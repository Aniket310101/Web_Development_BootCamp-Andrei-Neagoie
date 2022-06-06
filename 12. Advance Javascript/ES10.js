// converts array into object
const profile = [["Ani", 23], ["Shrey",21], ["Tarun", 12]]
Object.fromEntries(profile);


//flat and flatMap
const pr = [["Ani", 23], ["Shrey", [21, 23, 24]], ["Tarun", 12]]
pr.flat(2);


const pr1 = pr.flatMap((val)=>{
    val+ "changed";
})

//try and catch
try{
    true+"Hello";
}
catch{
    console.log("Messed Up!")
}