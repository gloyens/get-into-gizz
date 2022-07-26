function openMenu() {
  document.getElementById("menu").style.height = "100%";
}
  
function closeMenu() {
  document.getElementById("menu").style.height = "0%";
}

function randomAlbum() {
  var pages = ["album-pages/butterfly-3000.html",
    "album-pages/im-in-your-mind-fuzz.html",
    "album-pages/infest-the-rats-nest.html", 
    "album-pages/nonagon-infinity.html",
    "album-pages/paper-mache-dream-balloon.html",
    "album-pages/polygondwanaland.html",
    "album-pages/quarters.html"];

  var value = pages[Math.floor(Math.random() * pages.length)];
  console.log(window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')));
  if (window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')).endsWith("album-pages")) {
    window.location = "../" + value;}
  else {window.location = value;}
}