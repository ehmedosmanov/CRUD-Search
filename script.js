const btnSubmit = document.querySelector("#btnSubmit");
const btnEdit = document.querySelector("#btnEdit");
const tableBody = document.querySelector("tbody");
const imgInput = document.querySelector("#imgInput");
const filmName = document.querySelector("#filmName");
const categories = document.querySelector("#categories");
const filmImbd = document.querySelector("#filmImbd");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#close-modal");
const search = document.querySelector(".search");
const editDiv = document.querySelector('.icon-ed')
const form = document.getElementById('form')


let memoElement


closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});



btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    filmName.value === "" ||
    categories.value === "" ||
    filmImbd.value === "" ||
    imgInput === ""
  ) {
    alert("box olmaz");
    return;
  }
  const createTableRow = document.createElement("tr");
  const filmNameTd = document.createElement("td");
  const categoryTd = document.createElement("td");
  const filmImbdTd = document.createElement("td");
  const imgTd = document.createElement("td");
  const actions = document.createElement("td");
  const actionDelBox = document.createElement("div");
  const actionEdBox = document.createElement("div");
  const img = document.createElement("img");
  let src = imgInput.value;
  
  imgTd.append(img);
  img.setAttribute("src", src);

  actionDelBox.classList.add("icon-del");
  actionDelBox.innerHTML = ` <i class="fa-solid fa-trash"></i>`;
  actionEdBox.classList.add("icon-ed");
  actionEdBox.innerHTML = `<i class="fa-solid fa-edit"></i>`;
  actions.append(actionDelBox, actionEdBox);

  filmNameTd.textContent = filmName.value;
  categoryTd.textContent = categories.value;
  filmImbdTd.textContent = filmImbd.value;

  createTableRow.append(imgTd);
  createTableRow.append(filmNameTd);
  createTableRow.append(filmImbdTd);
  createTableRow.append(categoryTd);
  createTableRow.append(actions);
  tableBody.append(createTableRow);

  actionEdBox.addEventListener('click', (e) => {
    console.log(e);
    e.preventDefault()
    memoElement = createTableRow
    console.log(memoElement);
    filmName.value = filmNameTd.textContent
    imgInput.value = img.src
    categories.value = categoryTd.textContent
    filmImbd.value = filmImbdTd.textContent
  })

  setTimeout(() => {
    modal.classList.add("show");
  }, 1000);

  setTimeout(() => {
    modal.classList.remove("show");
  }, 5000);

form.reset()
});


btnEdit.addEventListener('click', (e) => {
    e.preventDefault()
    memoElement.children[0].children[0].src = imgInput.value
    memoElement.children[1].textContent = filmName.value
    memoElement.children[2].textContent = filmImbd.value
    memoElement.children[3].textContent = categories.value

})



search.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();
  for (let i = 0; i < tableBody.children.length; i++) {
    tableBody.children[i].children[1].textContent.toLowerCase().includes(value)
      ? (tableBody.children[i].style.display = "table-row")
      : (tableBody.children[i].style.display = "none");
  }

});
