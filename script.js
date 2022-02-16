const btn = document
  .getElementById("btn")
  .addEventListener("click", function () {
    let input = document.getElementById("input");
    let inputValue = input.value;

    if (input.value != "") {
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML =
        inputValue +
        '<div class="item"><div><i class="fa-regular fa-pen-to-square icon"></i><i class="fa-regular fa-trash-can del" ></i><i class="fa-regular fa-bookmark blue "id="book"><i class="fa-solid fa-bookmark fill"id="fill"></i></i></div></div>';
      let items = document.getElementById("items").appendChild(item);
    }

    input.value = "";
  });

const delButs = document.querySelectorAll(".del");
for (const delBut of delButs) {
  delBut.addEventListener("click", function () {
    console.log("ma");
  });
}
