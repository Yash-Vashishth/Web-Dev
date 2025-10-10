const baseURL = 'https://dummyjson.com';
const list = document.getElementById("user-list");
function getData(){
    fetch(`${baseURL}/users`)   // returns a Priomise since it is a window function 
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data);

            for (let user of data.users) {
                const li = document.createElement("li");
                li.innerText = `${user.firstName} ${user.lastName}`;
                list.append(li);
            }
        });
}

getData();
