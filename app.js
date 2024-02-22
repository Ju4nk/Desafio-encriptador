let letra = ['a', 'e','i','o','u'];
let clave = ['ai','enter','imes','ober','ufat'];
let caracteresPermitidos = ["a"," ","",",","?","\n","¿","!", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","1","2","3","4","5","6","7","8","9","0"]
let botoncopiar = document.getElementById("botoncopiar");
let salida = [];
const botonCopiar = document.getElementById("copiar");
document.getElementById('botoncopiar').addEventListener('click', copiar);



function textoACadena(){
    salida = [];
    let entrada = document.getElementById("entrada").value;
    let i = 0;
    while (i <  entrada.length) {
        salida[i] = entrada[i];
        i++;
    }   
    validarEntrada(salida);
    i = 0;  
    botonCopiar.removeAttribute("disabled");
   
    return;
    
}

function encriptar(){
    textoACadena(salida);
   
    
    let i  = 0;
  
    while(i < salida.length){
        let indiceLetra = letra.indexOf(salida[i]);
        let indiceClave = clave[indiceLetra];
        if(letra[indiceLetra] == salida[i] ){
            salida[i] = indiceClave;
        }else{}
        i = i + 1;
    }
    i=0;
    document.getElementById("salida").innerHTML = salida.join("");
    return;
  
}

function desencriptar(){
    let i = 0;
    let o = 1;
    textoACadena(salida);   
    while (i<salida.length){
        let indiceLetra = letra.indexOf(salida[i]);
        let indiceClave = clave[indiceLetra];
        if(letra[indiceLetra] == salida [i]){
            
            while(o < indiceClave.length){
                console.log(indiceClave);
                salida.splice(i+1,1);
                o = o +1;
            }       
            o=1;    
        }  
        
        i = i+1;
    }
    document.getElementById("salida").innerHTML = salida.join("");
    salida = [];
}
function validarEntrada(){
    let i = 0;
    while(i<salida.length){
       
        if(!caracteresPermitidos.includes(salida[i])){
            alert("no se admiten caracteres especiales ni mayusculas");
            salida = [];
            break;
        }
        i++;
    }
 
}
function copiar(salida) {
    var codigoACopiar = document.getElementById('salida');
    navigator.clipboard.writeText(codigoACopiar.innerHTML);
  }