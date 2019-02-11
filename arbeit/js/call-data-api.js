function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function() {
    if (req.status >= 200 && req.status < 400) {
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function() {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}
ajaxGet("https://data.sfgov.org/resource/wwmu-gmzc.json", function(reponse) {
  var tableaux = JSON.parse(reponse);
  var tableauxElt = document.getElementById("mytable");
  tableaux.forEach(function(film) {
    var ligneElt = document.createElement("tr");
    ligneElt.innerHTML = "<td>" + film.title + "</td>" + "<td>" + film.release_year + "</td>" +
      "<td>" + film.locations + "</td>";
    tableauxElt.appendChild(ligneElt);
  });
});
