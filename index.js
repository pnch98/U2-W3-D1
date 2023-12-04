const handleSubmit = function (event) {
  event.preventDefault();

  const addButton = document.getElementById("addBtn");
  const task = document.querySelector("input");
  console.log(task);

  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const delButton = document.createElement("button");
  delButton.innerText = "Delete";
  delButton.classList.add("btn");
  delButton.classList.add("btn-danger");

  delButton.addEventListener("click", function (event) {
    event.target.closest("li").remove();
  });

  span.innerText = task.value;
  task.value = "";

  span.style.cursor = "pointer";

  span.addEventListener("click", function () {
    span.classList.toggle("text-decoration-line-through");
  });

  div.appendChild(span);
  div.appendChild(delButton);
  div.classList.add("d-flex");
  div.classList.add("justify-content-between");
  div.classList.add("align-items-center");

  li.appendChild(div);
  li.classList.add("bg-white");
  li.classList.add("p-2");
  li.classList.add("border");
  li.classList.add("border-0");
  li.classList.add("rounded-3");
  li.classList.add("w-100");
  li.classList.add("mb-2");

  document.querySelector("ul").appendChild(li);
};

window.onload = document.querySelector("form").addEventListener("submit", handleSubmit);
