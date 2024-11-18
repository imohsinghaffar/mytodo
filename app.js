let getInput = document.querySelector(".input");
let btnClick = document.querySelector(".btn");
let accessUl = document.querySelector('.ul');
function todo() {
    if (getInput.value) {
        let createlist = document.createElement("li");
        createlist.innerHTML = getInput.value.toUpperCase();
        createlist.setAttribute("class", "li-style newEle");
        accessUl.appendChild(createlist)

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.setAttribute('class','delBtn')

        createlist.appendChild(deleteBtn);
        getInput.value = "";

        deleteBtn.addEventListener('click', () => {
            accessUl.removeChild(createlist);
        })

    } else {
        alert("There is something wrong!");
    }
}

btnClick.addEventListener("click", todo)
getInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        todo()
    }
})

