var arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
]

var allsongs=document.querySelector("#all-songs");
var poster=document.querySelector("#left");


var play=document.querySelector("#play");
var backward=document.querySelector("#backward");
var forward=document.querySelector("#forward");


var audio=new Audio();

var selectedSong=0;

function main(){
    var clutter="";

arr.forEach((ele,idx)=>{
    clutter+=`<div class="song-card" id=${idx}>
        <div class="part1" >
            <img src="${ele.img}" alt=""/>
            <h2>${ele.songName}</h2>
        </div>
        <h6>3:56</h6>
    </div>`
});
audio.src=arr[selectedSong].url;
poster.style.backgroundImage=`url(${arr[selectedSong].img})`

allsongs.innerHTML=clutter;
}
main();

allsongs.addEventListener('click',(dets)=>{
    selectedSong=dets.target.id;
    play.innerHTML=`<i class="ri-pause-mini-fill"><i/>`
    main();
    audio.play();
});
var flag=0;
play.addEventListener('click',()=>{
    if(flag==0){
    play.innerHTML=`<i class="ri-pause-mini-fill"><i/>`
        main();
        audio.play();
    flag=1;
    }else{
        play.innerHTML=`<i class="ri-play-mini-fill"><i/>`
        audio.pause();
        flag=0;
    }
    
})