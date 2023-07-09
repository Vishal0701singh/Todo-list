let inpt= document.getElementById('inpt');
let btn = document.getElementById('btn');
btn.addEventListener("click", (e) => {
    e.preventDefault()
    let inptc = inpt.value;
    if (inptc==" ") {
        return;
    }
    if (!inptc) {
        setInterval(function request(){

        },2000)
        return;
    }
    let i = localStorage.length
    localStorage.setItem(i, inptc)

    const div = document.createElement("div");
    list.appendChild(div);
  
        div.classList.add("mainStyle");
   

    const childDiv1 = document.createElement("div");
    childDiv1.classList.add("childMain1");
    div.appendChild(childDiv1);

    const input1 = document.createElement("input");
    input1.classList.add("text1");
    input1.type = "checkbox";
    childDiv1.appendChild(input1);

    const input = document.createElement("input");
        input.classList.add("text");
    input.type = "text";
    input.value = localStorage.getItem(i);
    input.setAttribute("readonly", "readonly");
    childDiv1.appendChild(input);

    const childDiv2 = document.createElement("div");
    childDiv2.classList.add("childMain2");
    div.appendChild(childDiv2);

    const editButton = document.createElement("button");
    editButton.classList.add("Edit");
    editButton.innerHTML = "Edit";
    childDiv2.appendChild(editButton);
    editButton.addEventListener('click', () => {

        if (editButton.innerText.toLowerCase() == "edit") {
            input.removeAttribute("readonly");
            input.focus();
            input.style=" background-color: rgb(158, 67, 234);border:0px;"
            editButton.innerText = "Save";
            input.style.textDecoration = "none"

        } else {
            input.setAttribute("readonly", "readonly");
            editButton.innerText = "Edit";
                input.style="background-color: rgb(158, 67, 234);"
            localStorage.setItem(i, input.value);

        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("Delete");
    deleteButton.innerHTML = "Delete";
    childDiv2.appendChild(deleteButton);
    deleteButton.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.removeItem(i)
        list.removeChild(div);
    })
    inpt.value = " ";
})
