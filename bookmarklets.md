> Please make sure to [README](./README.md "README!!!") for the installation guide

---

## Youtube Zen

Acts as a toggle; disables some features from the Youtube interface in order to focus more on watching the video (without getting sucked into the [recommendation rabbit hole](https://medium.com/swlh/understanding-the-youtube-rabbit-hole-4d98e921eabe))

![Youtube Zen Preview][ytzp]

```js
javascript:(()=>{let elementexists = document.getElementById("yt-thing"); if (elementexists === null) { console.log( "%cYoutube is now in %cZen Mode", "font-weight:bold;font-size:25px", "font-size:25px;color:aqua" ), document.head.insertAdjacentHTML( "beforeend", "<style id='yt-thing'>div#container > div#end > div#buttons > ytd-notification-topbar-button-renderer, div#primary > ytd-rich-grid-renderer > div#contents, ytd-watch-flexy a.ytp-next-button, ytd-watch-flexy a.ytp-prev-button {display: none !important} div#secondary, div#primary-inner > ytd-comments#comments, div#contentContainer ytd-guide-renderer#guide-renderer > div#sections > ytd-guide-section-renderer:nth-child(2), div#secondary-inner > div#related {display: none !important} div#primary-inner > div:not(#player) {filter:saturate(5%)}</style>" ); } else if (String(elementexists.innerHTML).includes("none")) { console.log( "%cYoutube is now in %cNormal Mode", "font-weight:bold;font-size:25px", "font-size:25px;color:aqua" ), elementexists.remove(), document.head.insertAdjacentHTML( "beforeend", "<style id='yt-thing'>div#container > div#end > div#buttons > ytd-notification-topbar-button-renderer, div#primary > ytd-rich-grid-renderer > div#contents, ytd-watch-flexy a.ytp-next-button, ytd-watch-flexy a.ytp-prev-button {display: flex !important} div#secondary, div#primary-inner > ytd-comments#comments, div#contentContainer ytd-guide-renderer#guide-renderer > div#sections > ytd-guide-section-renderer:nth-child(2), div#secondary-inner > div#related {display: block !important} div#primary-inner > div:not(#player) {filter:saturate(1)}</style>" ); } else { console.log( "%cYoutube is now in %cZen Mode", "font-weight:bold;font-size:25px", "font-size:25px;color:aqua" ), elementexists.remove(), document.head.insertAdjacentHTML( "beforeend", "<style id='yt-thing'>div#container > div#end > div#buttons > ytd-notification-topbar-button-renderer, div#primary > ytd-rich-grid-renderer > div#contents, ytd-watch-flexy a.ytp-next-button, ytd-watch-flexy a.ytp-prev-button {display: none !important} div#secondary, div#primary-inner > ytd-comments#comments, div#contentContainer ytd-guide-renderer#guide-renderer > div#sections > ytd-guide-section-renderer:nth-child(2), div#secondary-inner > div#related {display: none !important} div#primary-inner > div:not(#player) {filter:saturate(5%)}</style>")}})();
```

Known Bugs:

- Previous Button appears outside of playlists when out of Zen Mode
- Next/Previous Buttons appear on Fullscreen playback
- Mobile View doesn't remove the recommended in Zen Mode
- Home screen sometimes doesn't appear when going out of Zen Mode

***Usually either changing the page language, opening a new YouTube tab, or just reopening the browser should fix them.***

---

## Custom Playback Speed

Presents a popup asking how much to change the playback speed of every video element in a page. Values can range from 0-16.

![Custom Playback Speed Preview][cpsp]

```js
javascript:(()=>{let playspeed=prompt("Enter the desired playback speed (0-16)","1");if(playspeed===null||playspeed>16||playspeed<0){playspeed=1}document.querySelectorAll("video").forEach((e)=>{e.playbackRate=playspeed});console.log(`%c Playback Speed is: %c${playspeed}`,"font-weight:bold;font-size:25px","font-size:25px;color:aqua")})();
```

[ytzp]: ./image_preview/ytzen.gif
[cpsp]: ./image_preview/cpseed.gif