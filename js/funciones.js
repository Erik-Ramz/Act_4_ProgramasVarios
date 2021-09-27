function temasSeleccionado(){
    var x = window.document.getElementById("temas").value;
    //inializar inputs
    document.getElementById("cajita").innerHTML='¡Resultados!';

}

function caja(){
    var num = parseInt(document.getElementById("n1").value);
    datos='';
    var h1 = prompt ("Ingrese su nombre", "")
    if(num<8){
        for(cont=1; cont<=num;cont++){
            datos += '<p class="IF">'+h1+'</p>';
        }
        switch(num){
            default:
            document.getElementById("cajita").innerHTML=datos;
        }
    }else{
        for(cont=1; cont<=num;cont++){
            datos += '<p class="ELSE">'+h1+'</p>';
        }
        switch(num){
            default:
            document.getElementById("cajita").innerHTML=datos;
        }
    }
}
function encuesta(){
    var a = document.getElementsByName("ubi");
    var b = document.getElementsByName("vot");
    var no = document.getElementById("nombre").value;
    datos = 'Nombre: '+no+'.<br>';
    for(var i=0; i < a.length; i++){      
        if(a[i].checked){
            var a1 = a[i].value;       
        }
    }
    switch(a1){
        case 'a':
            datos+='Sección: Norte.<br>';
        break;
        case 'b':
            datos+='Sección: Centro.<br>';
        break;
        case 'c':
            datos+='Sección: Sur.<br>';
        break;
    }
    datos += ' Votó por: ';
    for(var i=0; i < b.length; i++){      
        if(b[i].checked){
            var b1 = b[i].value;       
        }
    }
    switch(b1){
        case 'a':
            datos+='Partido Rojo.';
        break;
        case 'b':
            datos+='Alianza Azul.';
        break;
        default:
            datos+='NULO';
    }
    document.getElementById('resultado').innerHTML=datos;
}
function calcular(){
    var n = parseInt(document.getElementById("n1").value);
    num = parseInt(0);
    do{
        num += n;
        n = parseInt(prompt ("La suma es: "+num+". Ingrese otro número", ""));
    }while(n>0);
    datos = 'El total fue: '+num;
    document.getElementById("resultado").innerHTML=datos;
}
function ordenar(){
    var num1 = parseInt(document.getElementById("n1").value);
    var num2 = parseInt(document.getElementById("n2").value);
    var num3 = parseInt(document.getElementById("n3").value);
    aux = parseInt(0);

    if(num1<num2){
        aux = num1;
        num1 = num2;
        num2 = aux;
    }
    if(num1<num3){
        aux = num1;
        num1 = num3;
        num3 = aux;
    }
    if(num2<num3){
        aux = num2;
        num2 = num3;
        num3 = aux;
    }
    datos='Primero: '+num1+'<br>Segundo: '+num2+'<br>Tercero: '+num3;
    document.getElementById("resultado").innerHTML=datos;
}
function importe(){
    var n = parseInt(document.getElementById("n1").value);
    if(n<15000){
        n = n+(n*.1) ;
    }else{
        n = n+(n*.16);
    }
    datos = 'El importe tota es de $'+n;
    document.getElementById("resultado").innerHTML=datos;
}
function saldo(){
    var num = parseInt(document.getElementById("n1").value)
    if(num>10){
        datos = 40000+(40000*.1);
    }else{
        if(num<=10 && num>5){
        datos = 40000+(40000*.07);
        }else{
            if(num<=5 && num>3){
            datos = 40000+(40000*.05);
            }else{
                datos = 40000+(40000*.03);
            }
        }
    }
    datos = 'El ingreso total del trabajador es de $'+datos;
    document.getElementById("resultado").innerHTML=datos;
}
function impar(){
    mult=parseInt(1);
    datos='';
    for(var i = 1;i<=100;i++){
        c=i % 2;
        if(c == 1){
            mult+=i;
            datos+=i;
            if(i < 99){
                datos+=' + ';
            }else{
                datos+=' = ';
            }
        }
    }
    datos = datos + mult;
    document.getElementById("resultado").innerHTML=datos;
}
function aste(){
    var num = parseInt(document.getElementById("n1").value);
    datos='';
    for(cont=1; cont<=num;cont++){
        datos += '*';
    }
    document.getElementById("resultado").innerHTML=datos;
}
function tabla(){
    mult = parseFloat(1);
    datos='';
    for(var i = 1; i <= 10; i++){

        for(var x = 1; x <= 10; x++){
            mult=i*x;
            datos +=  x+' + '+i+' = '+mult+'<br>';
        }
        datos=datos+'-----------------------------<br>';
        
    }
    document.getElementById("resultado").innerHTML=datos
}
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
