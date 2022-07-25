function openMenu() {
  document.getElementById("menu").style.height = "100%";
}
  
function closeMenu() {
  document.getElementById("menu").style.height = "0%";
}

function randomAlbum() {
  var pages = ["mind-fuzz.html", 
    "nonagon-infinity.html",
    "paper-mache-dream-balloon.html"];

  var value = pages[Math.floor(Math.random() * pages.length)];

  if (window.location == "index.html") {
    window.location = "album-pages/" + value;
  }
  else {window.location = "../album-pages/" + value;}
}