const add = document.querySelector(".add");
var input = document.querySelector("input");
var list = document.querySelector(".list");
var clist = document.querySelector(".clist");
const removeBtn = document.querySelector(".remove-btn");

list.style.opacity = "0";
clist.style.opacity = "0";
removeBtn.style.opacity = "0";

add.addEventListener("click", function () {
  if (input.value == "") {
    alert("Enter the task!!!");
  } else {
    list.style.opacity = "1";
    var row = `<div class="insideList">
        <div class="value">${input.value}</div>
        <div class="iconsOf">
          <div class="checkBtn"><i class="fa-sharp fa-solid fa-check"></i></div>
          <div class="doneBtn"><i class="fa-solid fa-trash"></i></div>
        </div> 
        </div>`;
    list.insertAdjacentHTML("beforeend", row);
    list.style.opacity = "1";
    removeBtn.style.opacity = "1";

    var doneBtn = document.querySelectorAll(".doneBtn");
    for (var i = 0; i < doneBtn.length; i++) {
      doneBtn[i].onclick = function () {
        this.parentNode.parentNode.remove();
      };
    }
    removeBtn.addEventListener("click", function () {
      var inlist = document.querySelector(".insideList");
      inlist.remove();
      list.style.opacity = "0";
      removeBtn.style.opacity = "0";
    });

    var tickBtn = document.querySelectorAll(".checkBtn");
    for (var i = 0; i < tickBtn.length; i++) {
      tickBtn[i].onclick = function () {
        clist.style.opacity = "1";
        var value = this.parentNode.parentNode.textContent;
        var row = `<div class="inclist">
          ${value}
        </div>`;
        clist.insertAdjacentHTML("beforeEnd", row);
        this.parentNode.parentNode.remove();
      };
    }
  }
});
