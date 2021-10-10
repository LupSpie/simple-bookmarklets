playbackSpeed = () => {
    let playspeed = prompt("Enter the desired playback speed (0-16)", "1");
    if (playspeed === null || playspeed > 16 || playspeed < 0) {
        playspeed = 1;
    }
    document.querySelectorAll("video").forEach((e) => {
        e.playbackRate = playspeed;
    });
    console.log(`Playback Speed is: ${playspeed}`);
};
playbackSpeed();

/*
javascript:(()=>{let playspeed=prompt("Enter the desired playback speed (0-16)","1");if(playspeed===null||playspeed>16||playspeed<0){playspeed=1;}
document.querySelectorAll("video").forEach((e)=>{e.playbackRate=playspeed;});console.log(`Playback Speed is: ${playspeed}`)})();
*/
