function but1() {
    document.getElementById("notfound").className = "error-search-on";

    var1 = document.getElementById('inp1').value;
    document.getElementById("p1").innerHTML = "Sorry " + '" ' + var1 + ' " ' + "NOT FOUND..!  -_-";

}

function but2() {
    document.getElementById("search").className = "search";
    document.getElementById("options2").className = "options2";
    document.getElementById("but2").className = "none";
    document.getElementById("but3").className = "more2";

}

function but3() {
    document.getElementById("search").className = "search-after";
    document.getElementById("options2").className = "none";
    document.getElementById("but2").className = "more";
    document.getElementById("but3").className = "none";

}