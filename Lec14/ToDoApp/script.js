const inp = document.querySelector("input");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
    const text = inp.value;
    inp.value = "";

    addToDo(text);
})

function addToDo(text) {
    const li = document.createElement("li");

    li.innerHTML = `
        <div>
            <input type="checkbox">
            <span>${text}</span>
        </div>
        <button class="btn-delete" >✖</button>
    `;
    li.classList.add("todo-item");
    
}