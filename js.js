window.addEventListener("load",init);
var kij="";
var muvjel = "";
var tomb = [];
function ID(elem){
    return document.getElementById(elem);
}

function CLASS(elem){
    return document.getElementsByClassName(elem);
}
function $(elem){
    return document.querySelectorAll(elem);
}

function init(){
    $("footer")[0].innerHTML = "György Krisztián";
    feltoltes();
    esemeny();
}

function feltoltes(){
    var gombok = "";
    var sz = $(".szamok")[0];
    for (let index = 0; index < 10; index++) {
        szz = "<button id="+index+">"+index+"</button>";
        gombok = gombok+szz;
    }
    sz.innerHTML = gombok;
}

function esemeny(){
    
    $(".szamok").forEach(element => {
        element.addEventListener("click",szam);
    });
    $(".muvjelek button").forEach(element =>{
        element.addEventListener("click",muvelet);
    });
}
var tartalmaz =$(".muvjelek button");
function muvelet(){
    var kiir= $(".kijelzo")[0];
    kij=kij+event.target.innerHTML;
    if(event.target.id == "torles"){
        kij="";
    }
    else if(event.target.id == "egyenlo"){
        
    }else{
        if(tartalmaz.inculdes(event.target.innerHTML));
            
    }

    kiir.innerHTML = kij;
}


function szam(event){
    var kiir= $(".kijelzo")[0];
    kij=kij+event.target.id;
    kiir.innerHTML = kij;
}