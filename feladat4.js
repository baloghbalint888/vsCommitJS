tomb=[
]
kiir();
function fuggveny(){
    var nev = document.getElementById("nev").value;
    var kor = document .getElementById("kor").value;
    var uj =[nev,kor];
    tomb.push(uj);
    kiir();

}

function kiir(){
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
}