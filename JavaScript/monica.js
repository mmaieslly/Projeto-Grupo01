/*DEFININDO FUNÇÕES*/
function sumir(elemento){
    elemento.style.display = "none";
}
function aparecer(elemento){
    elemento.style.display = "block";
}


/*ESCONDER DATA DE VOLTA EM VOO SÓ DE IDA*/
let idaVolta = document.getElementById("switch-shadow");
let volta = document.getElementById("volta");
let espaco = document.getElementById("espaco");

idaVolta.addEventListener("change", (e)=>{
    if (idaVolta.checked == false){
        sumir(volta);
        aparecer(espaco);
    } else {
        sumir(espaco);
        aparecer(volta);
    }
})

/*DATA INICIAL NUNCA POSTERIOR A DATA FINAL*/
let dataIda = document.getElementById("dataIda");

dataIda.addEventListener("change", (e)=>{
    console.log(dataIda.value);
    document.getElementById("dataVolta").min = dataIda.value
})

/*ORIGEM E DESTINO NAO PODEM SER IGUAIS*/
let origem = document.getElementById("origem");
let destino = document.getElementById("destino");

destino.addEventListener("keyup", (e)=>{
    console.log(origem.value)
    if(origem.value == destino.value){
        alert("Origem e Destino não podem ser iguais!")
    }else if(origem.value == ""){
        alert("O local de Origem está vazio, insira primeiro a origem e depois o destino!")
    }
})

let procurar = document.getElementById("procurar");

procurar.addEventListener("click", (e)=>{
    if(idaVolta.checked == false){
        if(dataIda == ""){
            alert("data de ida!")
        }
    }
})