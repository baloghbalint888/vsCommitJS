
var ki = document.getElementById("ki");
tomb=["Bálint","Jenő"];

function fuggveny(){
    var nev = document.getElementById("nev").value;
    tomb.push(nev);
    tomb.sort();
    kiir();
}

function kiir(){
    var tabla = document.createElement("tabla");
    for(i=0;i<tomb.length;i++){
    var sor=document.createElement("tr");
    var cella=document.createElement("td");
    cella.innerHTML=tomb[i];

    cella.onclick=function(i){
        tomb.splice(i,1)
        kiir();
    };

    sor.appendChild(cella);
    tabla.appendChild(sor);
    }
    ki.innerHTML="";
    ki.appendChild(tabla);
}
