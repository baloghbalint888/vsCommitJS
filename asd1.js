

function fuggveny(){
    var nev = document.getElementById("nev").value;
    var szam = document.getElementById("szam").value;
    var ki = document.getElementById("tabla");
    ki.innerHTML = "";
    var i;
        for( i = 1;i<=szam;i++){
            ki.innerHTML +="<tr><td>"+nev+"</tr></td>";
        }


};

