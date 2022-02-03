const favchapinput = document.querySelector("#favchap");
const addchapbtn = document.querySelector("button");
const listelements = document.querySelector(".list");

addchapbtn.addEventListener("click", () => {
  if (favchapinput.value == "") {
    window.alert("Please enter a book and chapter.");
    return;
  } else {
    // Create line items
    const newli = document.createElement("li");
    const newcontainer = document.createElement("span");
    const newbutton = document.createElement("button");

    newli.appendChild(newcontainer);
    newcontainer.innerText = favchapinput.value;
    newli.appendChild(newbutton);
    newbutton.textContent = "❌";
    newbutton.classList.value = "removebtn";
    listelements.appendChild(newli);

    //remove current value from box
    favchapinput.value = "";

    // Remove if button x is clicked.
    newbutton.addEventListener("click", () => listelements.removeChild(newli));
  }

  favchapinput.focus();
});
