const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox === '') {
        alert("Please enter something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    localStorageData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

//Local Storage
function localStorageData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//display the data when we open the website again.
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();


