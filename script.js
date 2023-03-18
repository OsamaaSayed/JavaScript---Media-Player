var audio = document.querySelector("audio");
var image = document.querySelector("img");

var controlInput = document.getElementById("controlInput");
var volumeInput = document.getElementById("volumeInput");



volumeInput.addEventListener("input", function () {

    audio.volume = volumeInput.valueAsNumber;

})

controlInput.addEventListener("input",function(){

    audio.currentTime = controlInput.valueAsNumber;

})


var songsArray = [
    'Songs/Billie Eilish, Khalid - lovely.mp3',
    'Songs/Indila - Dernière Danse.mp3',
    'Songs/The-Weeknd-Call-Out-My-Name-.mp3',
    'Songs/Lana Del Rey - Lust For Life ft..The-Weeknd.mp3'
]

var imagesArray = [
    'Images/billie-eilish.jpg',
    'Images/indila.jpg',
    'Images/the weekend.jpg',
    'Images/lana del rey.jpg'
]


var currentSong = document.querySelectorAll(".songs button");


currentSong.forEach(function (song) {

    song.addEventListener('click', function (e) {

        switch (e.target.className) {

            case 'btn1':
                audio.src = songsArray[0];
                image.src = imagesArray[0];
                break;
            case 'btn2':
                audio.src = songsArray[1];
                image.src = imagesArray[1];
                break;
            case 'btn3':
                audio.src = songsArray[2];
                image.src = imagesArray[2];
                break;
            case 'btn4':
                audio.src = songsArray[3];
                image.src = imagesArray[3];
                break;
            default: '';
        }

    })

})




function playAudio() {
    audio.play();

}


function pauseAudio() {
    audio.pause();
}


function stopAudio() {

    audio.load();
    audio.pause();
    controlInput.valueAsNumber = audio.currentTime;

}

function muteAudio(){

    audio.muted = !audio.muted;

}