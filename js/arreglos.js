var arreglo1=["4","2","9","7"];
var arreglo2=["g","d","y","e"];

function mostrar(){
    var texto="";
    var i;
    texto="Arreglo 1: ";
    for(i=0;i<arreglo1.length;i++){
        texto+=arreglo1[i]+" - ";
    }
    texto+="<br>Arreglo 2: "
    for(i=0;i<arreglo2.length;i++){
        texto+=arreglo2[i]+" - ";
    }
    document.getElementById('resu').innerHTML=texto;
}
function pop(){
    var texto="";
    var i;
    arreglo1.pop();
    arreglo2.pop();
    texto = "<br>Arreglo 1: "
    for(i=0;i<arreglo2.length;i++){
        texto+=arreglo2[i]+" - ";
    }
    texto+="<br>Arreglo 2: "
    for(i=0;i<arreglo2.length;i++){
        texto+=arreglo2[i]+" - ";
    }
    document.getElementById('resu').innerHTML=texto;
}
function shift(){
    var texto="";
    var i;
    arreglo1.shift();
    arreglo2.shift();
    texto = "<br>Arreglo 1: "
    for(i=0;i<arreglo1.length;i++){
        texto+=arreglo1[i]+" - ";
    }
    texto+="<br>Arreglo 2: "
    for(i=0;i<arreglo2.length;i++){
        texto+=arreglo2[i]+" - ";
    }
    document.getElementById('resu').innerHTML=texto;
}
function splice(){
    var agregar1 = document.getElementById("a1").value;
    var agregar2 = document.getElementById("a2").value;
    var texto="";
    var i;
    arreglo1.splice(2,0,agregar1);
    arreglo2.splice(2,0,agregar2);
    texto+="<br>Arreglo 1: "
    for(i=0;i<arreglo1.length;i++){
        texto+=arreglo1[i]+" - ";
    }
    texto+="<br>Arreglo 2: "
    for(i=0;i<arreglo2.length;i++){
        texto+=arreglo2[i]+" - ";
    }
    document.getElementById('resu').innerHTML=texto;
}
function sort(){
    var texto="";
    var i;
    arreglo1.sort();
    arreglo2.sort();
    texto = "<br>Arreglo 1: "
    for(i=0;i<arreglo1.length;i++){
        texto+=arreglo1[i]+" - ";
    }
    texto+="<br>Arreglo 2: "
    for(i=0;i<arreglo2.length;i++){
        texto+=arreglo2[i]+" - ";
    }
    document.getElementById('resu').innerHTML=texto;
}
function reverse(){
    var texto="";
    var i;
    arreglo1.reverse();
    arreglo2.reverse();
    texto = "<br>Arreglo 1: "
    for(i=0;i<arreglo1.length;i++){
        texto+=arreglo1[i]+" - ";
    }
    texto+="<br>Arreglo 2: "
    for(i=0;i<arreglo2.length;i++){
        texto+=arreglo2[i]+" - ";
    }
    document.getElementById('resu').innerHTML=texto;
}
function push(){
    var texto="";
    /* var i; */
    arreglo1.push("20");
    arreglo2.push("dT");
    texto = "<br>Arreglo 1: "
    for(i=0;i<arreglo1.length;i++){
        texto+=arreglo1[i]+" - ";
    }
    texto+="<br>Arreglo 2: "
    for(i=0;i<arreglo2.length;i++){
        texto+=arreglo2[i]+" - ";
    }
    document.getElementById('resu').innerHTML=texto;
}
function unshift(){
    var texto="";
    /* var i; */
    arreglo1.unshift("20");
    arreglo2.unshift("dT");
    texto = "<br>Arreglo 1: "
    for(i=0;i<arreglo1.length;i++){
        texto+=arreglo1[i]+" - ";
    }
    texto+="<br>Arreglo 2: "
    for(i=0;i<arreglo2.length;i++){
        texto+=arreglo2[i]+" - ";
    }
    document.getElementById('resu').innerHTML=texto;
}
function join(){
    texto="<br>Arreglo 1: "+arreglo1.join(" | ")+'<br>';
    texto+="Arreglo 2: "+arreglo2.join(" / ");
    document.getElementById('resu').innerHTML=texto;
}
function lenght() {
    arreglo1[arreglo1.length] = "23";
    arreglo2[arreglo2.length] = "lol";
    texto = "<br>Arreglo 1: "
    for(i=0;i<arreglo1.length;i++){
        texto+=arreglo1[i]+" - ";
    }
    texto+="<br>Arreglo 2: "
    for(i=0;i<arreglo2.length;i++){
        texto+=arreglo2[i]+" - ";
    }
    document.getElementById('resu').innerHTML=texto;
}
function concat() {
    concatenado=arreglo1.concat(arreglo2);
    texto = "<br>Concatenado: "
    for(i=0;i<concatenado.length;i++){
        texto+=concatenado[i]+" - ";
    }
    
    document.getElementById('resu').innerHTML=texto;
}

function Delete(){
    var texto="";
    /* arreglo1.delete("9");
    arreglo2.delete("y"); */
    delete arreglo1[1];
    delete arreglo2[2];
    texto = "<br>Arreglo 1: "
    for(i=0;i<arreglo1.length;i++){
        texto+=arreglo1[i]+" - ";
    }
    texto+="<br>Arreglo 2: "
    for(i=0;i<arreglo2.length;i++){
        texto+=arreglo2[i]+" - ";
    }
    document.getElementById('resu').innerHTML=texto;
}