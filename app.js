const songList = ["applause", "boo", "gasp", "tada", "victory", "wrong"]

const stopSongs = () => {
    songList.forEach((sound) => {
        const song = document.querySelector(`#${sound}`);
        
        song.pause();
        song.currentTime = 0;
    });
};


songList.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSongs();

        document.querySelector(`#${sound}`).play();
    });

    document.querySelector("#buttons").append(btn);
});