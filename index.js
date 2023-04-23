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

// Récupération des éléments HTML nécessaires
const container = document.querySelector('.container');
const popUp = document.createElement('div');
popUp.classList.add('popup');

// Ajout d'un événement de clic sur chaque div
container.querySelectorAll('.contain').forEach((div) => {
  div.addEventListener('click', (event) => {
    // Récupération de la div interne "content"
    const content = event.currentTarget.querySelector('.content').innerHTML;
    
    // Affichage de la popup avec le contenu de la div cliquée
    popUp.innerHTML = content;
    document.body.appendChild(popUp);
    popUp.classList.add('visible');
    container.classList.add('disable-contain');
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
        container.classList.remove('disable-contain');
      }, 149);
    });
  });
});
