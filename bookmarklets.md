### Please make sure to [README](./README.md)!!

---

- #### Youtube Zen

Disables some features from the youtube interface, such as the recommended bar, notifications, desaturates some elements and more in order to make you focus.

This one acts as a toggle switch, so you don't need to worry about it.

```js
javascript:(()=>{let elementexists = document.getElementById("yt-thing"); if (elementexists === null) { console.log( "%cYoutube is now in %cZen Mode", "font-weight:bold;font-size:25px", "font-size:25px;color:aqua" ), document.head.insertAdjacentHTML( "beforeend", "<style id='yt-thing'>div#container > div#end > div#buttons > ytd-notification-topbar-button-renderer, div#primary div#contents, ytd-watch-flexy a.ytp-next-button, ytd-watch-flexy a.ytp-prev-button {display: none !important} div#secondary, div#primary-inner > ytd-comments#comments, div#contentContainer ytd-guide-renderer#guide-renderer > div#sections > ytd-guide-section-renderer:nth-child(2), div#secondary-inner > div#related {display: none !important} div#primary-inner > div:not(#player) {filter:saturate(5%)}</style>" ); } else if (String(elementexists.innerHTML).includes("none")) { console.log( "%cYoutube is now in %cNormal Mode", "font-weight:bold;font-size:25px", "font-size:25px;color:aqua" ), elementexists.remove(), document.head.insertAdjacentHTML( "beforeend", "<style id='yt-thing'>div#container > div#end > div#buttons > ytd-notification-topbar-button-renderer, div#primary div#contents, ytd-watch-flexy a.ytp-next-button, ytd-watch-flexy a.ytp-prev-button {display: flex !important} div#secondary, div#primary-inner > ytd-comments#comments, div#contentContainer ytd-guide-renderer#guide-renderer > div#sections > ytd-guide-section-renderer:nth-child(2), div#secondary-inner > div#related {display: block !important} div#primary-inner > div:not(#player) {filter:saturate(1)}</style>" ); } else { console.log( "%cYoutube is now in %cZen Mode", "font-weight:bold;font-size:25px", "font-size:25px;color:aqua" ), elementexists.remove(), document.head.insertAdjacentHTML( "beforeend", "<style id='yt-thing'>div#container > div#end > div#buttons > ytd-notification-topbar-button-renderer, div#primary div#contents, ytd-watch-flexy a.ytp-next-button, ytd-watch-flexy a.ytp-prev-button {display: none !important} div#secondary, div#primary-inner > ytd-comments#comments, div#contentContainer ytd-guide-renderer#guide-renderer > div#sections > ytd-guide-section-renderer:nth-child(2), div#secondary-inner > div#related {display: none !important} div#primary-inner > div:not(#player) {filter:saturate(5%)}</style>")}})();
```

---

- #### Custom Playback Speed

Shows a popup asking how much you want to speed *every* video on the page. Great for lectures that are 90 hours long.

If you input any value outside the range (0-16) it defaults to 1.

```js
javascript:(()=>{let playspeed=prompt("Enter the desired playback speed (0-16)","1");if(playspeed===null||playspeed>16||playspeed<0){playspeed=1}document.querySelectorAll("video").forEach((e)=>{e.playbackRate=playspeed});console.log(`%c Playback Speed is: %c${playspeed}`,"font-weight:bold;font-size:25px","font-size:25px;color:aqua")})();
```