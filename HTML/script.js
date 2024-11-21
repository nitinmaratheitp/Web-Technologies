// with Promise
/*
function loadRandomUsers(){
    fetch("https://reqres.in/api/users", {
        method: "GET",
    })
    .then((Response) => Response.json())
    .then((data) => console.log(data));
}
*/

//With Async await
async function loadRandomUsers(){
    let Response = await fetch("https://reqres.in/api/users");
    let data = await Response.json();
    console.log("data", data);
}

loadRandomUsers();