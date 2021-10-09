tombf=[
]
kiir();
function fuggveny(){
    var nev = document.getElementById("nev").value;
    var nem = document .getElementById("nem").checked;
    var uj =[nev,kor];
    if (nem.checked){
        tombl.push(uj)
    }
    else{
        tombf.push(uj)
    }
    
    tomb.push(uj);
    kiir();

}

function kiir(){
        tombl.sort(hasonlit)
        tombf.sort(hasonlit);
        var tabla = document.createElement("tabla");
        for(let i=0;i<tomb.length;i++){
        var sor=document.createElement("tr");
        var cella=document.createElement("td");
        cella.innerHTML=tomb[i][0];
        sor.appendChild(cella);
        var cella=document.createElement("td");
        cella.innerHTML=tomb[i][1];
        sor.appendChild(cella);
        tabla.appendChild(sor);
    }
    ki.innerHTML="";
    ki.appendChild(tabla);

    function hasonlit(a,b){
        return a[1]-b[1];
    }
}