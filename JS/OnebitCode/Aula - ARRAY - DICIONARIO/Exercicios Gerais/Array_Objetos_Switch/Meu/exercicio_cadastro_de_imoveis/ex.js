let imoveis = [];

let imovel = {
  proprietario: "",
  qtd_quartos: "",
  qtd_banheiros: "",
  garagem: ""
};

let opcao = "";

do {
  opcao = prompt(
    "Quantidade de Imoveis: " +
      imoveis.length +
      "\n\nOpções:" +
      "\n1 - Salvar imovel" +
      "\n2 - Mostrar imoveis" +
      "\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      imovel.proprietario = prompt("Digite o nome do proprietario");
      imovel.qtd_quartos = prompt("Digite a quantidade de quartos");
      imovel.qtd_banheiros = prompt("Digite a quantidade de banheiros");
      let possui_garagem = prompt(
        "O imovel possui garagem? - Sim ou 1 | Não ou 2"
      );
      if (possui_garagem == "sim" || possui_garagem == "1") {
        imovel.garagem = true;
      } else {
        imovel.garagem = false;
      }

      imoveis.push(imovel);

      console.log(imoveis);

      break;
    case "2":
      if (imoveis.length == 0) {
        alert("Não há imóveis");
      } else {
        for (let i = 0; i < imoveis.length; i++) {
          alert(
            i +
              1 +
              "º Imóvel:" +
              "\nProprietário do Imovel: " +
              imoveis[i].proprietario +
              "\nQuantidade de quartos: " +
              imoveis[i].qtd_quartos +
              "\nQuantidade de banheiros: " +
              imoveis[i].qtd_banheiros +
              "\nPossui garagem?" +
              imoveis[i].garagem
          );
        }
      }

      break;
    case "3":
      alert("Encerrando..");
      break;

    default:
      alert("Opção Inválida");
  }
} while (opcao !== "3");