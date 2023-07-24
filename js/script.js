/*------- CARGA -------*/
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const progressBar = document.getElementById("progress-bar");
    const genkidama = document.getElementById("genkidama");
    let progress = 0;
    let initialSize = 430;
    const targetSize = 430;
    const duration = 3000;
  
    function updateProgressBar() {
      progressBar.style.width = `${progress}%`;
      const progressPercentElement = document.getElementById("progress-percent");
      progressPercentElement.textContent = `${Math.round(progress)}%`;
    }
  
    function updateGenkidama() {
      const size = initialSize + (progress / 100) * (targetSize - initialSize);
      genkidama.style.height = `${size}px`;
      genkidama.style.width = `${size}px`;
      genkidama.style.borderRadius = `${size / 2}px`;
    }
  
    function animate() {
      const currentTime = Date.now() - startTime;
      if (currentTime < duration) {
        progress = (currentTime / duration) * 100;
        updateProgressBar();
        updateGenkidama();
        requestAnimationFrame(animate);
      } else {
        progress = 100;
        updateProgressBar();
        updateGenkidama();
        preloader.style.display = "none";
      }
    }
  
    const startTime = Date.now();
    animate();
  });
  /*------- CARGA -------*/