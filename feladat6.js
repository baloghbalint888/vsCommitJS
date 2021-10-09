elelmi = []
egyeb = []
var ki= document.getElementById("ki");
var ki2= document.getElementById("ki2");
function fuggveny(){

    var nev = document.getElementById("nev").value;
    var ar = document.getElementById("ar").value;
    var elelmiE = document.getElementById("elelmi");
    if (elelmiE.checked){
        var uj =[nev,ar*1.15];
        elelmi.push(uj)
        kiir();
    }
    else{
        var uj =[nev,ar*1.25];
        egyeb.push(uj)
        kiir2();
    }

}


function hasonlit(a,b){
    return a[1]-b[1];
 }
function kiir(){
    elelmi.sort()
    var elelmiTabla = document.createElement("table");
    for(let i=0;i<elelmi.length;i++){
        var sor=document.createElement("tr");
        var cella=document.createElement("td");
        cella.innerHTML=elelmi[i][0];
        sor.appendChild(cella);
        var cella=document.createElement("td");
        cella.innerHTML=elelmi[i][1];
        sor.appendChild(cella);
        elelmiTabla.appendChild(sor);
        }
    ki.innerHTML="Élelmiszer";
    ki.appendChild(elelmiTabla);
}

function kiir2(){
    egyeb.sort()
    var egyebTabla = document.createElement("table");
    for(let i=0;i<egyeb.length;i++){
        var sor=document.createElement("tr");
        var cella=document.createElement("td");
        cella.innerHTML=egyeb[i][0];
        sor.appendChild(cella);
        var cella=document.createElement("td");
        cella.innerHTML=egyeb[i][1];
        sor.appendChild(cella);
        egyebTabla.appendChild(sor);
        }
    ki2.innerHTML="Egyéb";
    ki2.appendChild(egyebTabla);
}