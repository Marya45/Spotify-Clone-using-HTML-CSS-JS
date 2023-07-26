
let songindex = 1;
let audioElement = new Audio('./songs/1.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let mastersongname = document.getElementById('mastersongname');
let gifcap = Array.from(document.getElementsByClassName('gifcap'));

let songs = [
    { songName: "On & On-Cartoon", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg" },
    { songName: "Invincible-DEAF KEV", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg" },
    { songName: "Mortals-Warriyo", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg" },
    { songName: "Shine-Spektrem", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg" },
    { songName: "Why We Lose-Cartoon", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg" },
    { songName: "Sky High-Elektro", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg" },
    { songName: "Symbolism-Electro-Li", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg" },
    { songName: "Heroes Tonight-Janji", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg" },
    { songName: "My Heart", filePath: "./songs/9.mp3", coverPath: "./covers/9.jpg" },
    { songName: "Feel Good-Syn Cole", filePath: "./songs/10.mp3", coverPath: "./covers/10.jpg" }
]

// For changing the name and cover of the songs
songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

// Play and pause handling
masterplay.addEventListener('click', function () {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

        gifcap[songindex-1].style.opacity = 1;
        document.getElementsByClassName('songItemPlay')[songindex-1].classList.remove('fa-circle-play');
        document.getElementsByClassName('songItemPlay')[songindex-1].classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

        gifcap[songindex-1].style.opacity = 0;
        document.getElementsByClassName('songItemPlay')[songindex-1].classList.remove('fa-circle-pause');
        document.getElementsByClassName('songItemPlay')[songindex-1].classList.add('fa-circle-play');
    }
})

audioElement.addEventListener('timeupdate', function () {
    // console.log('timeupdate');
// Seekbar handling
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', function () {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


function makeallplays() {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', function (e) {
        makeallplays();

        if (audioElement.paused || audioElement.currentTime <= 0) {
            songindex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = ('./songs/' + songindex + '.mp3');
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            gifcap[songindex-1].style.opacity = 1;
            mastersongname.innerText = songs[songindex-1].songName;
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
        }
        else {
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
            gif.style.opacity = 0;
            gifcap[songindex-1].style.opacity = 0;
        }
    })
})


document.getElementById('next').addEventListener('click', function () {

    gifcap[songindex-1].style.opacity = 0;
    document.getElementsByClassName('songItemPlay')[songindex-1].classList.remove('fa-circle-pause');
    document.getElementsByClassName('songItemPlay')[songindex-1].classList.add('fa-circle-play');

    if (songindex == 10) {
        songindex = 1;
    }
    else {
        songindex += 1;
    }
    audioElement.src = ('./songs/' + songindex + '.mp3');
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    gifcap[songindex-1].style.opacity = 1;
    mastersongname.innerText = songs[songindex-1].songName;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

    document.getElementsByClassName('songItemPlay')[songindex-1].classList.remove('fa-circle-play');
    document.getElementsByClassName('songItemPlay')[songindex-1].classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', function () {

    gifcap[songindex-1].style.opacity = 0;
    document.getElementsByClassName('songItemPlay')[songindex-1].classList.remove('fa-circle-pause');
    document.getElementsByClassName('songItemPlay')[songindex-1].classList.add('fa-circle-play');

    if (songindex == 1) {
        songindex = 10;
    }
    else {
        songindex -= 1;
    }
    audioElement.src = ('./songs/' + songindex + '.mp3');
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    gifcap[songindex-1].style.opacity = 1;
    mastersongname.innerText = songs[songindex-1].songName;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

    document.getElementsByClassName('songItemPlay')[songindex-1].classList.remove('fa-circle-play');
    document.getElementsByClassName('songItemPlay')[songindex-1].classList.add('fa-circle-pause');
})