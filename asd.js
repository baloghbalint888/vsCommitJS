/* 
var nev = prompt("Kérek egy nevet!");
var kor = prompt("Kérek egy életkort!");
var nem = prompt("Kérem a nemét!(fiú/lány)");
if(kor>30 && nem == "fiú"){
    console.log("Jó napot "+nev+" bácsi!");
}
else if(kor>30 && nem =="lány"){
    console.log("Jó napot"+nev+" néni!");
}
else{
    console("Szia "+nev+"!");
} */

/* var num = prompt("Kérek egy számot!");
var num2 = prompt("Kérek egy másik számot!");
if(num<num2 || num==num2){
    for(num;num<=num2;num++){
        console.log(num);
    }

}
else{
    for(num;num>=num2;num--){
        console.log(num);
    }
} */
/* var szam = Math.floor(Math.random()*100);
var input = prompt("Kérem a számot!");
console.log(szam);
if(szam>input){
    console.log("Vesztettél...");
}
else if(input>szam){
    console.log("Győztél!");
}
else{
    console.log("Egyenlőek...")
} */

//var i = 1;
/*
do{
    console.log(i);
    i++;
}while(i<=100); */
/*
while(i<=100){
    console.log(i);
    i++;
}*/

/* var nehezseg = prompt("Valassz nehezseget! (kezdő, haladó, mester)");
if(nehezseg=="kezdő"){
    var szam = Math.floor(Math.random()*10);
}
if(nehezseg=="haladó"){
    var szam = Math.floor(Math.random()*100);
}
if(nehezseg=="mester"){
    var szam = Math.floor(Math.random()*1000);
}



var talalgatasokSzama = 0;
var input = prompt("Kérek egy számot!");
do{
    if(input > szam){
        input = prompt("Kisebb.."+" Kérek egy másik számot!");
        talalgatasokSzama++;
    }
    if(szam > input ){
        input = prompt("Nagyobb.."+" Kérek egy másik számot!");
        talalgatasokSzama++;
    }
}while(input != szam);
console.log("Talált! "+szam+" A találgatások száma: " +talalgatasokSzama); */


/* for(var i=1; i<=100;i++){
    var rand = Math.floor(Math.random()*100)
    if(parosE(rand)){
        console.log(rand + " páros" + primE(rand))
    }
    else{
        console.log(rand + " páratlan" + primE(rand))
    }
}

function parosE(szam){
    if(szam%2==0){
        return true;
    }
    else return false;
} 


/* var nev = prompt("Kérek egy nevet!");
var kor = prompt("Kérek egy kort!");
var nem = prompt("kérek egy nemet! (férfi/nő)");
console.log(koszones(nev,kor,nem));

function koszones(nev,kor,nem){
    var koszontes;
    var megszolitas;
    if(kor>35){
        koszontes = "Jó napot kívánok ";
    }
    if(kor<=35){
        koszontes = "Szia ";
    } 

    if(nem=="férfi"){
        megszolitas = " úr!";
    }
    if(nem=="nő"){
        megszolitas = " néni!"
    }
    if(kor>35 && nem!=null){
        return koszontes + nev + megszolitas;
    }
    else{
        return koszontes + nev;
    }
} */



var tippszam = 0;
var gep = Math.floor(Math.random()*100);
function kiir(){
   /*  var kor = document.getElementById("kor").value;
    var be = document.getElementById("nevinp").value;
    var ki = document.getElementById("ki"); */
    var ki2 = document.getElementById("ki2");
    // var fiu = document.getElementById("lul");
/* 
    if(fiu.checked){
        document.body.style.backgroundColor = "lightblue";
        if(kor<30){
            ki.innerHTML = "hello " + be;
        }
        if(kor>=30){
            ki.innerHTML = "Jó napot " +be;
        }
    }
    else{
        document.body.style.backgroundColor = "pink";
        if(kor<30){
            ki.innerHTML = "szia " + '<br>';
        }
        if(kor>=30){
            ki.innerHTML = "CSókolom " +be + '<br>';
        }
    } */
/*     for(var i=1;i<=szam;i++){
        if(primE(i)){
            ki2.innerHTML +='<p style="background-color:white">'+i+'</p>';
        }
        else{
            ki2.innerHTML +='<p>'+i+'</p>';
        }
        
    } */
/*     function primE(szam){
        var osztokSzama = 0;
        for(var i = 1;i<=szam;i++){
            if(szam%i==0){
                osztokSzama++;
            }
        }
        if(osztokSzama == 2){
            return true;
        }
    else return false;
    } */

    //jatek

    

    var szam = document.getElementById("szam").value;
    
    if(szam<gep){
        
        tippszam++;
        ki2.innerHTML += "<p style='background-color:red'>Vesztettél....Nagyobbra gondoltam!</p>" + "Tippek szama: " + tippszam;
    }
    else if(gep<szam){
        
        tippszam++;
        ki2.innerHTML += "<p style='background-color:lightblue'>Győztél...Kisebbre gondoltam!</p>" + "Tippek szama: " + tippszam;
    }
    else{
        
        tippszam++;
        ki2.innerHTML += "<p style='background-color:grey'>Egyenlőek..</p>" + "Tippek szama: " + tippszam;
    } 
}