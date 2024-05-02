
AOS.init();

fetch("gameLab.json")

  .then(rep => {
    return rep.json();
  })

  .then(data => {
    ajoutDonnees(data);
  });


function ajoutDonnees(data) {
  addHero(data);
  addServices(data);
  addReal(data);
  addTemoignage(data);
  addPartenaires(data);
}


function addHero(data) {

  let heroSection = document.querySelector("#herodelapage");

  let heroContent = `
        <div class="paragrapheimg">
            <h1>${data.nomCommercial}</h1>
            <p>${data.phraseAccroche}</p>
            <br>
            <a href="">${data.texteCallToAction}</a>
        </div>
    `;


  heroSection.innerHTML = heroContent;
}

function addServices(data) {
  let beneficesClientsSection = document.querySelector("#benef");


  data.beneficesClients.forEach(benefice => {
    let paragraph = document.createElement("p");
    paragraph.textContent = benefice;
    beneficesClientsSection.appendChild(paragraph);
  });
}


function addReal(data) {
  let realisationsSection = document.getElementById("real");

 
  data.realisations.forEach(realisation => {
    addRealItem(realisationsSection, realisation);
  });
}


function addRealItem(realisationsSection, realisation) {
 
  let card = document.createElement("div");
  card.classList.add("tout", "flex");


  let cardContent = `
        <div class="textecarte">
            <h4>${realisation.type}</h4>
            <p>${realisation.description}</p>
        </div>
    `;

  let image = document.createElement("img");
  image.src = realisation.image;


  image.style.width = "100%";
  image.style.height = "auto";

  card.appendChild(image);


  card.innerHTML += cardContent;


  realisationsSection.appendChild(card);
}

function addTemoignage(data) {
    let temoinSection = document.getElementById("cartedefou");

    temoinSection.innerHTML = "";


    let temoignagesValides = data.temoignagesClients.filter(isValidTemoignage);

    
    temoignagesValides.forEach(temoignage => {
        addTemoignageItem(temoinSection, temoignage);
    });
}

function isValidTemoignage(temoignage) {
    return temoignage.prenom.trim() !== "" && temoignage.typePrestation.trim() !== "" && temoignage.commentaire.trim() !== "";
}

function addTemoignageItem(temoinSection, temoignage) {
 
    let card = document.createElement("div");
    card.classList.add("cardtemoin");

   
    let cardContent = `
        <h4>${temoignage.prenom}</h4>
        <p class="theme">${temoignage.typePrestation}</p>
        <p>${temoignage.commentaire}</p>
        <p class="note">★ ★ ★ ★ ☆</p>
    `;


    card.innerHTML = cardContent;

    temoinSection.appendChild(card);
}


  
  