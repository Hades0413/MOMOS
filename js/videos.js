document.addEventListener('DOMContentLoaded', function () {
  const videos = Array.from(document.querySelectorAll('.video-contenedor .video'));
  let currentIndex = 0;

  function playVideo(index) {
    const videoElements = document.querySelectorAll('.video-contenedor .video video');
    videoElements.forEach(video => video.pause());
    videoElements[index].play();
  }

  function changeVideo(direction) {
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % videos.length;
    } else if (direction === 'previous') {
      currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    }

    const video = videos[currentIndex].querySelector('video');
    const img = videos[currentIndex].querySelector('img');
    const emergenteVideo = document.querySelector('.emergente video');
    const emergenteImg = document.querySelector('.emergente img');

    if (video) {
      emergenteVideo.style.display = 'block';
      emergenteVideo.src = video.getAttribute('src');
      emergenteImg.style.display = 'none';
    } else if (img) {
      emergenteImg.style.display = 'block';
      emergenteImg.src = img.getAttribute('src');
      emergenteVideo.style.display = 'none';
    }

    playVideo(currentIndex);

    document.querySelector('.emergente').style.display = 'flex';
    document.querySelector('.contenedor').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  }

  document.querySelectorAll('.video-contenedor div').forEach((el, index) => {
    el.onclick = () => {
      currentIndex = index;
      changeVideo();
    };
  });

  document.querySelector('.emergente span').onclick = () => {
    document.querySelector('.emergente').style.display = 'none';
    document.querySelector('.emergente video').pause();
    document.querySelector('.emergente img').style.display = 'none';
    document.querySelector('.contenedor').style.backgroundColor = '#334';
  };

  document.getElementById('previous-video-btn').onclick = () => {
    changeVideo('previous');
  };

  document.getElementById('next-video-btn').onclick = () => {
    changeVideo('next');
  };

  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
      changeVideo('next');
    } else if (event.key === 'ArrowLeft') {
      changeVideo('previous');
    } else if (event.key === 'Escape') {
      document.querySelector('.emergente').style.display = 'none';
      document.querySelector('.emergente video').pause();
      document.querySelector('.emergente img').style.display = 'none';
      document.querySelector('.contenedor').style.backgroundColor = '#334';
    }
  });

  /* video solo en ventana emergente */

  const closeButton = document.querySelector('.emergente .close-btn');
  closeButton.addEventListener('click', () => {
    document.querySelector('.emergente').style.display = 'none';
    document.querySelector('.emergente video').pause();
  });

  const videosInEmergente = document.querySelectorAll('.emergente video');
  videosInEmergente.forEach((video) => {
    video.addEventListener('click', (event) => {
      event.stopPropagation();
      video.play();
    });

    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });
  });

  function playVideo(index) {
    const videoElements = document.querySelectorAll('.video-contenedor .video video');
    videoElements.forEach((video) => {
      if (!video.paused) {
        video.pause();
      }
    });

    const emergenteVideo = document.getElementById('emergente-video');
    emergenteVideo.src = videoElements[index].getAttribute('src');
    emergenteVideo.play();
  }
});
