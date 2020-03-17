
var xlmns = "http://www.w3.org/2000/svg";

var svg = document.createElementNS(xlmns, "svg");
svg.setAttribute("width", "640");
svg.setAttribute("height", "360");
svg.setAttribute("viewBox", "0 0 500 500");
document.body.appendChild(svg);

for (var i = 0; i < cities.length; i++) {
    var circle = document.createElementNS(xlmns, "circle");

    var positieX = (cities[i].longitude + 180) * 2;
    var positieY = (90 - cities[i].latitude) * 2;

    circle.setAttribute("cx", positieX);
    circle.setAttribute("cy", positieY);
    circle.setAttribute("r", 0.5);
    circle.setAttribute("fill", "#513240");
    svg.append(circle);
}

console.log(cities[2].name);