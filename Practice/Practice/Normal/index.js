function addTask() {
    let task = document.getElementById("task").value;
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
    document.getElementById("task").value = "";
    let span = document.createElement("span");
    let txt = document.createTextNode("x");
    span.className = "delete";
    span.appendChild(txt);
    li.appendChild(span);

    let close = document.getElementsByClassName("delete");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
