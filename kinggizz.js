function openMenu() {
  document.getElementById("menu").style.height = "100%";
}
  
function closeMenu() {
  document.getElementById("menu").style.height = "0%";
}

function randomAlbum() {
  var pages = ["album-pages/12-bar-bruise.html",
    "album-pages/butterfly-3000.html",
    "album-pages/changes.html",
    "album-pages/eyes-like-the-sky.html",
    "album-pages/fishing-for-fishies.html",
    "album-pages/float-along-fill-your-lungs.html",
    "album-pages/flying-microtonal-banana.html",
    "album-pages/gumboot-soup.html",
    "album-pages/ice-death-planets-lungs-mushrooms-and-lava.html",
    "album-pages/im-in-your-mind-fuzz.html",
    "album-pages/infest-the-rats-nest.html",
    "album-pages/kg.html",
    "album-pages/laminated-denim.html",
    "album-pages/lw.html",
    "album-pages/made-in-timeland.html",
    "album-pages/murder-of-the-universe.html",
    "album-pages/nonagon-infinity.html",
    "album-pages/oddments.html",
    "album-pages/omnium-gatherum.html",
    "album-pages/paper-mache-dream-balloon.html",
    "album-pages/polygondwanaland.html",
    "album-pages/quarters.html",
    "album-pages/sketches-of-brunswick-east.html",
    "album-pages/willoughbys-beach.html"];

  var value = pages[Math.floor(Math.random() * pages.length)];
  console.log(window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')));
  if (window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')).endsWith("album-pages")) {
    window.location = "../" + value;}
  else {window.location = value;}
}