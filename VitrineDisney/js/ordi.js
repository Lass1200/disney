window.addEventListener("scroll", function() {
    var navpost = document.querySelector(".navpost-sticky"); //on cible le navpost-sticky
    var scrollposition = window.scrollY; //on creer une variabe
    var windowheight = window.innerHeight;
    var threshold = windowheight * 0.3; // 30% of the window height
  
    if (scrollposition > threshold) {
      navpost.classList.add("show");
    } else {                                    
      navpost.classList.remove("show");
    }
  });

  const divQuestions = document.querySelectorAll('.divquestion');
  //. La méthode querySelectorAll() renvoie un tableau contenant tous les éléments correspondant au sélecteur CSS .divquestion.

  divQuestions.forEach(div =>  {//forEach() est appelée sur ce tableau, ce qui permet d'appliquer la même fonction à chaque élément du tableau.
    const bouton = div.querySelector('.bouton2'); //et ajoute un écouteur d'événement sur le clic de .bouton2. et contenu
    const contenu = div.querySelector('.contenu');
  
    bouton.addEventListener('click', function() {
      contenu.classList.toggle('visible'); //toggle pour supprimer une classe
      bouton.classList.toggle('active');
      if (bouton.classList.contains('active')) {
        bouton.querySelector('.croix').textContent = '-';
      } else {
        bouton.querySelector('.croix').textContent = '+';
      }
    });
  });
  


// Récupère le bouton pour scroller vers le bas
const scrollDownBtn = document.querySelector('.arrow-down');

// Scrolle vers le bas de la page lorsque l'utilisateur clique sur le bouton
scrollDownBtn.addEventListener('click', () => {
  window.scroll({
    top: 820,
    behavior: 'smooth'
  });
});