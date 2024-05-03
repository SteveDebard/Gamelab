
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
    beneficesClientsSection.innerHTML += `
     <p data-aos="fade-right" data-aos-duration=1500>${benefice}</p>
    `
  });
}


function addReal(data) {
  let realisation = document.querySelector("#real");


  data.realisations.forEach(element => {
    realisation.innerHTML += `
    <div class="tout">
            <img src="${element.image}" alt="">
        <div class="textecarte">
            <h4>"${element.type}</h4>
            <p>"${element.description}</p>
        </div>
    `
  });
}


function addTemoignage(data) {
  let commentaire = document.querySelector("#cartedefou");


  data.temoignagesClients.forEach(element => {
    commentaire.innerHTML += `
    <div class="cardtemoin" id="temoin">
    <h4>${element.prenom}</h4>
    <p class="theme">${element.typePrestation}</p>
    <p>${element.commentaire}</p>
    <div class="note">${ecrireStarRating(element.note)}</div>
    </div>
    `
    });
}
// Fonction qui retournera le texte a mettre dans le star rating (merci yanis pour le code)
function ecrireStarRating(donnee){

  let final = ""
  // Une première boucle pour ajouter les étoiles remplies, puis une autre boucle allant jusqu'a (5 - la note) pour ajouter les étoiles vides
  for (let i = 0; i < donnee; i++){

      final += `<p class="star">★</p>`

  }
  for (let i = 0; i < 5 - donnee; i++){

      final += `<p class="star">☆</p>`

  }


  return final
  }

  
  