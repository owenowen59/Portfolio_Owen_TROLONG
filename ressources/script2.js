/*document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const portfolio = document.getElementById("portfolio");
  
    // Minimum durée de l'écran de chargement (3 secondes)
    const minLoadingTime = 3000;
    const startTime = Date.now();
  
    // Vérifie quand la page est complètement chargée
    window.onload = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
  
      // Attend le temps restant si nécessaire
      setTimeout(() => {
        loadingScreen.style.display = "none";
        portfolio.style.display = "block";
      }, remainingTime);
    };
  });*/
  