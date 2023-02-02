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
    console.log(dataIda.value)
    document.getElementById("dataVolta").min = dataIda.value
})
