// For Playing video when clicked on a button 
    document.querySelector('#play-button').addEventListener('click', function() {
        var imageWrapper = document.querySelector('#image-wrapper');
        var videoPlayer = document.querySelector('#video-player');
    
        // Hide the image wrapper and show the video player
        imageWrapper.style.display = 'none';
        videoPlayer.classList.remove('d-none'); // Using classList to remove 'd-none'
    
        // Play the video
        videoPlayer.play();
      });