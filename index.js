// creer un form pour taper les todos

// insere les element taper dans le dom  a la validation

const form = document.querySelector("form");

const input = document.querySelector("#input");

const list = document.querySelector("#list");

// stocker dans le stockage
// storage part
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li> Cliquez sur un todos pour le supprimer </li>`;
  }
}

window.addEventListener("load", () => {
  getTodos();
});

// ajouter un element
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = input.value;
  list.innerHTML += `<li> ${value} </li>`;

  input.value = "";

  storeList();
});

list.addEventListener("click", (e) => {
  //   e.target.classList.add("checked");
  e.target.remove();
  storeList();
});
