let openAlternative = () => {
    let url = location;
    let newUrl = "redirect.invidious.io" + url.pathname + url.search;
    let isYoutube = url.origin.includes("youtube") ? true : false;
    let isVideo = url.href.includes("watch?v") ? true : false;

    if (!isYoutube || !isVideo) {
        return alert(`Could not open video: ${url}\n\nIn: ${newUrl}`);
    } else {
        window.open("https://" + newUrl);
        console.log(`This is the new Url: https://${newUrl}`);
    }
};
openAlternative();

/* Open in new tab:
javascript:(()=>{let url=location;let newUrl="redirect.invidious.io"+url.pathname+url.search;let isYoutube=url.origin.includes("youtube")?true:false;let isVideo=url.href.includes("watch?v")?true:false;if(!isYoutube||!isVideo){return alert(`Could not open video:${url}\n\nIn:${newUrl}`);}else{window.open("https://"+newUrl);console.log(`This is the new Url: https://${newUrl}`);}})();
*/

/* Replace Current Tab
javascript:(()=>{let url=location;let newUrl="redirect.invidious.io"+url.pathname+url.search;let isYoutube=url.origin.includes("youtube")?true:false;let isVideo=url.href.includes("watch?v")?true:false;if(!isYoutube||!isVideo){return alert(`Could not open video:${url}\n\nIn:${newUrl}`);}else{url.replace("https://"+newUrl);console.log(`This is the new Url: https://${newUrl}`);}})();
*/
