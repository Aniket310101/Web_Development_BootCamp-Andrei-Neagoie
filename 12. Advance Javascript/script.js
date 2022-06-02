// ternary condition
var a = 7;
var ans = (a===7)?"yes":"no";
console.log(ans);


//switch statements
function aa(direction){
    var hap;
    switch(direction){
        case "forward": 
            hap = "Meet monster!";
            break;
        case "backward": 
            hap = "arrive Home!";
            break;
        case "right": 
            hap = "you survive!";
            break;
        default:
            hap = "Die!";
    }
    return hap;
}
aa("backward");