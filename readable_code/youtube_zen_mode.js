youtubeZen = () => {
    let elementexists = document.getElementById("yt-thing");

    if (elementexists === null) {
        console.log(
            "%cYoutube is now in %cZen Mode",
            "font-weight:bold;font-size:25px",
            "font-size:25px;color:aqua"
        ),
            document.head.insertAdjacentHTML(
                "beforeend",
                "<style id='yt-thing'>div#container > div#end > div#buttons > ytd-notification-topbar-button-renderer, div#primary > ytd-rich-grid-renderer > div#contents, ytd-watch-flexy a.ytp-next-button, ytd-watch-flexy a.ytp-prev-button {display: none !important} div#secondary, div#primary-inner > ytd-comments#comments, div#contentContainer ytd-guide-renderer#guide-renderer > div#sections > ytd-guide-section-renderer:nth-child(2), div#secondary-inner > div#related {display: none !important} div#primary-inner > div:not(#player) {filter:saturate(5%)}</style>"
            );
    } else if (String(elementexists.innerHTML).includes("none")) {
        console.log(
            "%cYoutube is now in %cNormal Mode",
            "font-weight:bold;font-size:25px",
            "font-size:25px;color:aqua"
        ),
            elementexists.remove(),
            document.head.insertAdjacentHTML(
                "beforeend",
                "<style id='yt-thing'>div#container > div#end > div#buttons > ytd-notification-topbar-button-renderer, div#primary > ytd-rich-grid-renderer > div#contents, ytd-watch-flexy a.ytp-next-button, ytd-watch-flexy a.ytp-prev-button {display: flex !important} div#secondary, div#primary-inner > ytd-comments#comments, div#contentContainer ytd-guide-renderer#guide-renderer > div#sections > ytd-guide-section-renderer:nth-child(2), div#secondary-inner > div#related {display: block !important} div#primary-inner > div:not(#player) {filter:saturate(1)}</style>"
            );
    } else {
        console.log(
            "%cYoutube is now in %cZen Mode",
            "font-weight:bold;font-size:25px",
            "font-size:25px;color:aqua"
        ),
            elementexists.remove(),
            document.head.insertAdjacentHTML(
                "beforeend",
                "<style id='yt-thing'>div#container > div#end > div#buttons > ytd-notification-topbar-button-renderer, div#primary > ytd-rich-grid-renderer > div#contents, ytd-watch-flexy a.ytp-next-button, ytd-watch-flexy a.ytp-prev-button {display: none !important} div#secondary, div#primary-inner > ytd-comments#comments, div#contentContainer ytd-guide-renderer#guide-renderer > div#sections > ytd-guide-section-renderer:nth-child(2), div#secondary-inner > div#related {display: none !important} div#primary-inner > div:not(#player) {filter:saturate(5%)}</style>"
            );
    }
};

/*
javascript:(()=>{let elementexists = document.getElementById("yt-thing"); if (elementexists === null) { console.log( "%cYoutube is now in %cZen Mode", "font-weight:bold;font-size:25px", "font-size:25px;color:aqua" ), document.head.insertAdjacentHTML( "beforeend", "<style id='yt-thing'>div#container > div#end > div#buttons > ytd-notification-topbar-button-renderer, div#primary > ytd-rich-grid-renderer > div#contents, ytd-watch-flexy a.ytp-next-button, ytd-watch-flexy a.ytp-prev-button {display: none !important} div#secondary, div#primary-inner > ytd-comments#comments, div#contentContainer ytd-guide-renderer#guide-renderer > div#sections > ytd-guide-section-renderer:nth-child(2), div#secondary-inner > div#related {display: none !important} div#primary-inner > div:not(#player) {filter:saturate(5%)}</style>" ); } else if (String(elementexists.innerHTML).includes("none")) { console.log( "%cYoutube is now in %cNormal Mode", "font-weight:bold;font-size:25px", "font-size:25px;color:aqua" ), elementexists.remove(), document.head.insertAdjacentHTML( "beforeend", "<style id='yt-thing'>div#container > div#end > div#buttons > ytd-notification-topbar-button-renderer, div#primary > ytd-rich-grid-renderer > div#contents, ytd-watch-flexy a.ytp-next-button, ytd-watch-flexy a.ytp-prev-button {display: flex !important} div#secondary, div#primary-inner > ytd-comments#comments, div#contentContainer ytd-guide-renderer#guide-renderer > div#sections > ytd-guide-section-renderer:nth-child(2), div#secondary-inner > div#related {display: block !important} div#primary-inner > div:not(#player) {filter:saturate(1)}</style>" ); } else { console.log( "%cYoutube is now in %cZen Mode", "font-weight:bold;font-size:25px", "font-size:25px;color:aqua" ), elementexists.remove(), document.head.insertAdjacentHTML( "beforeend", "<style id='yt-thing'>div#container > div#end > div#buttons > ytd-notification-topbar-button-renderer, div#primary > ytd-rich-grid-renderer > div#contents, ytd-watch-flexy a.ytp-next-button, ytd-watch-flexy a.ytp-prev-button {display: none !important} div#secondary, div#primary-inner > ytd-comments#comments, div#contentContainer ytd-guide-renderer#guide-renderer > div#sections > ytd-guide-section-renderer:nth-child(2), div#secondary-inner > div#related {display: none !important} div#primary-inner > div:not(#player) {filter:saturate(5%)}</style>")}})();
*/
