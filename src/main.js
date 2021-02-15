// Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);

function displayItems(items) {
  for (var i = 0; i < items.length; i++) {
    const list = document.createElement("li");
    list.setAttribute("class", "item");
    list.innerHTML = `<img src="${items[i].image}" alt="${items[i].type}" class="item_thumbnail">
    <span class="item_description">${items[i].gender}, ${items[i].size}</span>`;

    document.querySelector(".items").appendChild(list);
  }
}

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  logo.addEventListener("click", () => {
    document.querySelector(".items").innerHTML = "";
    displayItems(items);
  });

  const btn = document.querySelectorAll(".btn");

  for (var i = 0; i < btn.length; i++) {
    const childName = btn[i].firstChild;

    btn[i].addEventListener("click", () => {
      document.querySelector(".items").innerHTML = "";

      if (childName.alt === "tshirt") {
        const tshirtData = items.filter((i) => i.type === "tshirt");
        displayItems(tshirtData);
      } else if (childName.alt === "pants") {
        const pantsData = items.filter((i) => i.type === "pants");
        displayItems(pantsData);
      } else if (childName.alt === "skirt") {
        const skirtData = items.filter((i) => i.type === "skirt");
        displayItems(skirtData);
      } else if (childName.textContent === "Blue") {
        const blueData = items.filter((i) => i.color === "blue");
        displayItems(blueData);
      } else if (childName.textContent === "Yellow") {
        const yellowData = items.filter((i) => i.color === "yellow");
        displayItems(yellowData);
      } else if (childName.textContent === "Pink") {
        const pinkData = items.filter((i) => i.color === "pink");
        displayItems(pinkData);
      }
    });
  }
}
