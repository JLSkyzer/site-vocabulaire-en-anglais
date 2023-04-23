const contains = document.querySelectorAll('.contain');
const open = false

// Crée un tableau d'objets avec la référence de chaque div et le texte du paragraphe "title"
const containArr = Array.from(contains).map(contain => {
  const title = contain.querySelector('.title');
  return { contain, titleText: title.textContent };
});

// Trie le tableau d'objets en utilisant le texte du paragraphe "title"
containArr.sort((a, b) => a.titleText.localeCompare(b.titleText));

// Réorganise les divs en fonction de l'ordre trié
containArr.forEach(item => {
  item.contain.parentNode.appendChild(item.contain);
});

// ===========================================================

// Récupération des éléments HTML nécessaires
const containerFR = document.querySelector('.containerFR');
const containerEN = document.querySelector('.containerEN');
const popUp = document.createElement('div');
popUp.classList.add('popup');

// Récupération des éléments HTML nécessaires
const frBtn = document.getElementById('fr-btn');
const enBtn = document.getElementById('en-btn');
const searchbarFR = document.getElementById('searchbarFR');
const searchbarEN = document.getElementById('searchbarEN');
const toggle = "fr";

// Ajout d'un événement de clic sur le bouton français
frBtn.addEventListener('click', () => {
  frBtn.classList.add('active');
  enBtn.classList.remove('active');
  containerFR.style.display = "flex"
  containerEN.style.display = "none"
  searchbarFR.style.display = "flex"
  searchbarEN.style.display = "none"
});

// Ajout d'un événement de clic sur le bouton anglais
enBtn.addEventListener('click', () => {
    frBtn.classList.remove('active');
    enBtn.classList.add('active');
    containerFR.style.display = "none"
    containerEN.style.display = "flex"
    searchbarFR.style.display = "none"
    searchbarEN.style.display = "flex"
});

function searchFR() {
  let input = document.getElementById('searchbarFR').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('contain');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}
function searchEN() {
  let input = document.getElementById('searchbarEN').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('contain');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}


// ================================================================

// Ajout d'un événement de clic sur chaque div
// FR
containerFR.querySelectorAll('.contain').forEach((div) => {
  div.addEventListener('click', (event) => {
    // Récupération de la div interne "content"
    const content = event.currentTarget.querySelector('.content').innerHTML;
    
    // Affichage de la popup avec le contenu de la div cliquée
    popUp.innerHTML = content;
    document.body.appendChild(popUp);
    popUp.classList.add('visible');
    containerFR.classList.add('disable-contain');
    popUp.style.animationName = "popup-open";
    popUp.style.animationDuration = "0.2s"
    popUp.style.animationDirection = "forward"
    popUp.style.animationTimingFunction = "ease-in-out";

    // Récupération du bouton de fermeture
    const closeBtn = popUp.querySelector('.closepopup');
    // Ajout d'un événement de clic sur le bouton de fermeture
    closeBtn.addEventListener('click', (event) => {
      popUp.style.animationName = "popup-close";
      popUp.style.animationDuration = "0.15s"
      popUp.style.animationDirection = "backward"
      popUp.style.animationTimingFunction = "ease-in-out";
      setTimeout(() => {
        popUp.classList.remove('visible');
        containerFR.classList.remove('disable-contain');
      }, 149);
    });
  });
});
// EN
containerEN.querySelectorAll('.contain').forEach((div) => {
  div.addEventListener('click', (event) => {
    // Récupération de la div interne "content"
    const content = event.currentTarget.querySelector('.content').innerHTML;
    
    // Affichage de la popup avec le contenu de la div cliquée
    popUp.innerHTML = content;
    document.body.appendChild(popUp);
    popUp.classList.add('visible');
    containerEN.classList.add('disable-contain');
    popUp.style.animationName = "popup-open";
    popUp.style.animationDuration = "0.2s"
    popUp.style.animationDirection = "forward"
    popUp.style.animationTimingFunction = "ease-in-out";

    // Récupération du bouton de fermeture
    const closeBtn = popUp.querySelector('.closepopup');
    // Ajout d'un événement de clic sur le bouton de fermeture
    closeBtn.addEventListener('click', (event) => {
      popUp.style.animationName = "popup-close";
      popUp.style.animationDuration = "0.15s"
      popUp.style.animationDirection = "backward"
      popUp.style.animationTimingFunction = "ease-in-out";
      setTimeout(() => {
        popUp.classList.remove('visible');
        containerEN.classList.remove('disable-contain');
      }, 149);
    });
  });
});
