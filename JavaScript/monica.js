let names = [
    "BSB - Aerop. Internacional de Brasília / Presidente Jucelino Kubitschek",
    "CGH  Aerop. Internacional de São Paulo / Congonhas",
    "GIG  Aerop. Internacional do Rio de Janeiro / Galeão-Antônio Carlos Jobim",
    "SSA  Aerop. Internacional de Salvador / Deputado Luis Eduardo Magalhães",
    "FLN  Aerop. Internacional de Florianópolis / Hercílio Luz",
    "POA  Aerop. Internacional de Porto Alegre / Salgado Filho",
    "VCP  Aerop. Internacional de Viracopos / Campinas",
    "REC  Aerop. Internacional do Recife/ Guararapes – Gilberto Freyre",
    "CWB  Aerop. Internacional de Curitiba / Afonso Pena",
    "BEL  Aerop. Internacional de Belém / Val de Cans",
    "VIX  Aerop. de Vitória – Eurico de Aguiar Salles",
    "SDU  Aerop. o Santos Dumont",
    "CGB  Aerop. Internacional de Cuiabá / Marechal Rondon",
    "CGR  Aerop. Internacional de Campo Grande",
    "FOR  Aerop. Internacional de Fortaleza / Pinto Martins",
    "MCP  Aerop. Internacional de Macapá",
    "MGF  Aerop. Regional de Maringá / Silvio Name Junior",
    "GYN  Aerop. de Goiânia / Santa Genoveva",
    "NVT  Aerop. Internacional de Navegantes / Ministro Victor Konder",
    "MAO  Aerop. Internacional de Manaus / Eduardo Gomes",
    "NAT  Aerop. Internacional de Natal / Augusto Severo",
    "BPS  Aerop. Internacional de Porto Seguro",
    "MCZ  Aerop. de Maceió / Zumbi dos Palmares",
    "PMW  Aerop. de Palmas/Brigadeiro Lysias Rodrigues",
    "SLZ  Aerop. Internacional de São Luís / Marechal Cunha Machado",
    "GRU  Aerop. Internacional de São Paulo/Guarulhos-Governador André Franco Motoro",
    "LDB  Aerop. de Londrina / Governador José Richa",
    "PVH  Aerop. Internacional de Porto Velho / Governador Jorge Teixeira de Oliveira",
    "RBR  Aerop. Internacional de Rio Branco / Plácido de Castro",
    "JOI  Aerop. de Joinville / Lauro Carneiro de Loyola",
    "UDI  Aerop. de Uberlândia / Ten. Cel. Av. César Bombonato",
    "CXJ  Aerop. Regional de Caxias do Sul / Hugo Cantergiani",
    "IGU  Aerop. Internacional de Foz do Iguaçu",
    "THE  Aerop. de Teresina – Senador Petrônio Portella",
    "AJU  Aerop. Internacional de Aracaju / Santa Maria",
    "JPA  Aerop. Internacional de João Pessoa / Presidente Castro Pinto",
    "PNZ  Aerop. de Petrolina / Senador Nilo Coelho",
    "CNF  Aerop. Internacional de Minas Gerais / Confins – Tancredo Neves",
    "BVB  Aerop. Internacional de Boa Vista / Atlas Brasil Cantanhede",
    "CPV  Aerop. de Campina Grande / Presidente João Suassuna",
    "STM  Aerop. de Santarém / Maestro Wilson Fonseca",
    "IOS  Aerop. de Ilhéus/Bahia-Jorge Amado",
    "JDO  Aerop. de Juazeiro do Norte – Orlando Bezerra",
    "IMP  Aerop. de Imperatriz – Prefeito Renato Moreira",
    "XAP  Aerop. de Chapecó – Serafin Enoss Bertaso",
    "MAB  Aerop. de Marabá",
    "CZS  Aerop. Internacional de Cruzeiro do Sul",
    "PPB  Aerop. Estadual de Presidente Prudente",
    "CFB  Aerop. Internacional de Cabo Frio",
    "FEN  Aerop. de Fernando de Noronha",
    "JTC  Aerop. Estadual de Bauru/Arealva",
    "MOC  Aerop. de Montes Claros/Mário Ribeiro",
    
  ];
  //Sort names in ascending order
  let sortedNames = names.sort();
  
  //reference
  let input = document.getElementById("origem");
  let input2 = document.getElementById("destino")
  
  //Execute function on keyup
  input.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
  
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        //create li element
        let listItem = document.createElement("li");
        //One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames('" + i + "')");
        //Display matched part in bold
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);
      }
    }
  });
  function displayNames(value) {
    input.value = value;
    removeElements();
  }
  function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }