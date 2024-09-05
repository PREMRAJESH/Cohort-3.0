function addTodo() {
  let todo = document.querySelector("input").value.trim();
  if (todo == "") {
    alert("Enter a todo");
  } else {
    console.log(todo);
    let list = document.createElement("li");
    let editbtn = document.createElement("button");
    let delbtn = document.createElement("button");

    list.textContent = todo;
    // editbtn.textContent = "edit";
    delbtn.textContent = "delete";

    document.querySelector("ul").appendChild(list);
    // list.appendChild(editbtn);
    list.appendChild(delbtn);

    editbtn.onclick = function () {
      editTodo(list, todo);
    };
    delbtn.onclick = function () {
      delTodo(list);
    };
    document.querySelector("input").value = " ";
  }
}
function editTodo(list, oldText) {
  let div = document.createElement("div");
  let eli = document.createElement("input");
  let edbtn = document.createElement("btn");
}
function delTodo(item) {
  item.remove();
}
