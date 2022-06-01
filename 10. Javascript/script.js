var creds = [
    {
        username: "Aniket",
        password: "123"
    },
    {
        username: "Ani",
        password: "123"
    },
    {
        username: "niket",
        password: "123"
    }
];

var newsFeed = [
    {
        user: "Sally",
        feed: "My first post."
    },
    {
        user: "Dolly",
        feed: "My first story."
    }
]

var use = prompt("Enter username:"); 
var pass = prompt("Enter password:");

function signIn(u, p){

    creds.forEach(function(i){
        if(u === i.username && p==i.password){
            console.log(newsFeed);
        }
        // else{
        //     console.log("Sorry!");
        // }
    });
    
}

signIn(use, pass);