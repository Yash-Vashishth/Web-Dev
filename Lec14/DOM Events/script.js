// const btn = document.querySelector("button");

// console.dir(btn);

// //Method 1

// // btn.onclick = function () {
// //     console.log("clicked")
// // };

// // Method 2

// btn.addEventListener("click", () => {
//     console.log("Clicked");
// })

// btn.addEventListener("dblclick", () => {
//     console.log("Clicked");
// })

const usernameInp = document.getElementById("username");
const passwordInp = document.getElementById("password");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInp.value;
    const password = passwordInp.value; 
    
    console.log("username", username);
    console.log("password", password);
})
