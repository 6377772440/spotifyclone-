document.addEventListener('DOMContentLoaded', () => {
    let audioElement = new Audio("Let-Me-Love-You(Pagal-World.Com.In).mp3");
    let masterPlay = document.getElementById('masterPlay');
    let progressBar = document.getElementById('myProgressBar');
    let gif = document.getElementById('gif');
    let songItems = Array.from(document.getElementsByClassName('songItems'));
    let songs = [
        { songName: "Let Me Love You", filepath: "Let-Me-Love-You(Pagal-World.Com.In).mp3", coverpath: "39240674_edited.jpg" },
        { songName: "My Heart Will Go On", filepath: "My-Heart-Will-Go-On-(Titanic)(Pagal-World.Com.In).mp3", coverpath: "39240674_edited.jpg" },
        { songName: "John Cena Theme", filepath: "John-Cena-Theme(Pagal-World.Com.In).mp3", coverpath: "John Cena Quotes.jpg" }
    ];

    // Populate song items with song details
    songItems.forEach((element, index) => {
        if (songs[index]) {
            element.getElementsByTagName('img')[0].src = songs[index].coverpath;
            element.getElementsByClassName('songsname')[0].innerText = songs[index].songName;
            element.addEventListener('click', () => {
                audioElement.src = songs[index].filepath;
                audioElement.play();
                masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle');
                gif.style.opacity = 1;
            });
        }
    });

    // Play/Pause functionality
    masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.replace('fa-pause-circle', 'fa-play-circle');
            gif.style.opacity = 0;
        }
    });

    // Update progress bar
    audioElement.addEventListener('timeupdate', () => {
        let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        progressBar.value = progress;
    });

    // Seek functionality
    progressBar.addEventListener('change', () => {
        audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
    });
});
