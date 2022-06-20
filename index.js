values = [
    {
        id: 1,
        artiste: 'Burna Boy',
        songName: 'Level Up',
        imageOfArtiste: 'images/Burna-Boy.jpg',
        songPath: 'audio/01-Burna-Boy-Level-Up-Twice-As-Tall-ft-Youssou-N-Dour-(JustNaija.com) (1) (1).mp3'
    },
    {
        id: 2,
        artiste: 'Burna Boy',
        songName: 'Way too big',
        imageOfArtiste: 'images/Burna-Boy.jpg',
        songPath: 'audio/03-Burna-Boy-Way-Too-Big-(JustNaija.com) (1) (1).mp3'
    },
    {
        id: 3,
        artiste: 'Chance the rapper ft Cardi B',
        songName: 'Best Life',
        imageOfArtiste: 'images/chance the rapper.jpg',
        songPath: 'audio/06 Best Life (feat. Chance the Rapper) (1) (1).mp3'
    },
    {
        id: 4,
        artiste: 'Kendrick Lamar ft Zacari',
        songName: 'Love',
        imageOfArtiste: 'images/kendrick.webp',
        songPath: 'audio/10. LOVE. (Ft. Zacari)(1) (1) (1).mp3'
    },
    {
        id: 5,
        artiste: 'Rod wave',
        songName: 'Heart On Ice',
        imageOfArtiste: 'images/rod-wave-2.jpg',
        songPath: 'audio/Heart On Ice - Rod Wave (1) (1).mp3'
    },
    {
        id: 6,
        artiste: 'NF',
        songName: 'Dreams',
        imageOfArtiste: 'images/NF.jpg',
        songPath: 'audio/NF-Dreams (1) (1).mp3'
    },
    {
        id: 7,
        artiste: 'NF ft Hopsin',
        songName: 'Lost',
        imageOfArtiste: 'images/NF.jpg',
        songPath: 'audio/NF-Ft-Hopsin-LOST (1) (1).mp3'
    },
    {
        id: 8,
        artiste: 'NF',
        songName: 'I miss the days',
        imageOfArtiste: 'images/NF.jpg',
        songPath: 'audio/NF-I-Miss-the-Days (1) (1).mp3'
    },
    {
        id: 9,
        artiste: 'NF',
        songName: 'If you want love',
        imageOfArtiste: 'images/NF.jpg',
        songPath: 'audio/NF-If-You-Want-Love (1) (1).mp3'
    },
    {
        id: 10,
        artiste: 'NF',
        songName: 'Let me go',
        imageOfArtiste: 'images/NF.jpg',
        songPath: 'audio/NF-Let-me-Go (1) (1).mp3'
    }
];



const artisteImg = document.querySelector('.artiste-img');
const artisteName = document.querySelector('.artiste-name');
const currentSong = document.querySelector('.song');
const songControl = document.querySelector('#song-control')


//Selecting UI elememts
const prevBtn = document.querySelector('.prev'),
      pauseBtn = document.querySelector('.pause'),
      playBtn = document.querySelector('.play'),
      audioSection = document.querySelector('.audio-section'),
      nextBtn = document.querySelector('.next');


let currentItem = 0;





window.document.addEventListener('DOMContentLoaded', function(){
    // //Create Range input
    // createRange();
    //Navigation of items
    navigate();
});

const item = values[currentItem];

//Play music
playBtn.addEventListener('click',()=>{
    songControl.play();
    pauseBtn.classList.remove('hide');
    playBtn.classList.add('hide');
    audioSection.classList.add('play')
    
})

//Pause music
pauseBtn.addEventListener('click', ()=>{
    songControl.pause();
    pauseBtn.classList.add('hide');
    playBtn.classList.remove('hide');
    audioSection.classList.remove('play')
})

//Next song
nextBtn.addEventListener('click', function(){
    currentItem ++;
    if (currentItem === 10){
        currentItem = 0;
    }
    navigate();
    songControl.play();
    playBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
    audioSection.classList.add('play')
})

//Previous song
prevBtn.addEventListener('click', ()=>{
    currentItem --;
    if (currentItem === -1){
        currentItem = 9;
    }
    navigate();
    songControl.play();
    playBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
    audioSection.classList.add('play')
});




function navigate(){
    const item = values[currentItem];
    artisteImg.src = item.imageOfArtiste;
    artisteName.textContent = item.artiste;
    currentSong.textContent = item.songName;
    songControl.src = item.songPath;
}
navigate();