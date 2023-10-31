let button = document.getElementById("btn");
let text = document.getElementById("text");
let body = document.querySelector(".container");
let deleteButton = document.getElementById("deleteButton");
let editButton = document.getElementById("editButton");
let arr = [];




button.addEventListener("click", () => {
        let ul = document.createElement("ul");
        let li = document.createElement("li");
    li.textContent = text.value;
    body.append(ul);
    ul.append(li);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
       
        console.log(li.textContent);
       
        
    });

    ul.appendChild(editButton);



    arr.push(text.value);

    localStorage.setItem("data", JSON.stringify(arr));


    

    text.value = "";

    
});



deleteButton.addEventListener("click", () => {
    localStorage.removeItem("data");

    let ulElements = document.querySelectorAll(".container ul");


    
    ulElements.forEach((ul) => {
        ul.remove();
    });
    arr=[]
});