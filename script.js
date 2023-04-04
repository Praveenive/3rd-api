let container = document.createElement("div");
container.setAttribute("class", "container");

let row = document.createElement("div");
row.setAttribute("class", "row");

container.appendChild(row);

getNames();

async function getNames() {
  try {
    let res = await fetch("https://api.citybik.es/v2/networks?fields=id,name,href");
    let data = await res.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

function displayData(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(networks.data[i]);

    let card = document.createElement("div");
    card.setAttribute("class", "card text-white bg-primary mb-3");
    card.style.maxWidth = "18rem";

    let cardHeader = document.createElement("div");
    cardHeader.setAttribute("class", "card-header");
    cardHeader.innerText = data[i].name;
    card.appendChild(cardHeader);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = "Id: " + data[i].id;
    cardBody.appendChild(cardTitle);

    let cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.innerText = "Ref : " + data[i].href;
    cardBody.appendChild(cardText);

    card.appendChild(cardBody);
    row.appendChild(card);
  }

  document.body.appendChild(container);
}
