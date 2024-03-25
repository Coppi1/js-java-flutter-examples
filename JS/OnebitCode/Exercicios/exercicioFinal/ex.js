let nextVagaId = 1;
let nextCandidatoId = 1;

function createVaga(nome, disponivel, dataLimite) {

  const vaga = {
    vaga_id: nextVagaId,
    vaga_nome: nome,
    vaga_qtd_incrito: 0,
    vaga_disponivel: disponivel,
    vaga_dataLimite: dataLimite,
  };
  nextVagaId++;
  return vaga;
}

let vagas = [];
let candidatos = [];

function createCandidato(nome, vaga) {
  const candidato = {
    candidato_id: nextCandidatoId,
    candidato_nome: nome,
    candidato_id_vaga: vaga,
  };
  nextCandidatoId++;
  return candidato;
}


function exibirMenu() {
  return prompt(
    "Sistema de Vagas de Emprego\n" +
    "1. Listar vagas disponíveis\n" +
    "2. Criar nova vaga\n" +
    "3. Visualizar uma vaga\n" +
    "4. Inscrever um candidato em uma vaga\n" +
    "5. Excluir uma vaga\n" +
    "6. Sair\n"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":

        const vagas_disponiveis = vagas.filter(function (vaga) {
          return vaga.vaga_disponivel === true || vaga.vaga_disponivel == 1;
        })
        if (vagas_disponiveis.length === 0) {
          alert("Nenhuma vaga disponível!");
        } else {
          vagas_disponiveis.forEach(function (i) {
            alert(
              "Vaga ID: " +
              i.vaga_id +
              "\nNome da Vaga: " +
              i.vaga_nome +
              "\nQtd de Cadidatos: " +
              i.vaga_qtd_incrito +
              "\nData Limite da vaga: " +
              i.vaga_dataLimite
            );
          });
        }
        break;

      case "2":
        let disponivel = prompt("A vaga está disponivel? 1 ou Sim | 2 ou Não");
        const nome = prompt("Digite o Nome da vaga: ");
        const dataLimite = prompt("Qual a data limite para a vaga?")

        const confirmacao = confirm(
          "Salvar esta vaga?\n" +
          "\nNome da Vaga: " +
          nome +
          "\nVaga disponível?: " +
          disponivel +
          "\nData limite da vaga: " +
          dataLimite
        );

        if (disponivel == "sim" || disponivel == "1") {
          disponivel = true;
        } else {
          disponivel = false;
        }

        if (confirmacao) {
          vagas.push(createVaga(nome, disponivel, dataLimite));
        }

        console.log(vagas);

        break;
      case "3":

        const vagas_resumo = vagas.reduce(function (acumulador, vaga) {
          return acumulador + "\n\nId da vaga: " + vaga.vaga_id +
            "\nNome: " + vaga.vaga_nome;
        }, "Vagas: ");

        alert(vagas_resumo)

        const id_vaga = prompt("Qual vaga deseja vizualizar?")

        selected_vaga = vagas.find(function (vaga) {
          return vaga.vaga_id === id_vaga;
        })

        alert(
          "Vaga ID: " +
          selected_vaga.vaga_id +
          "\nNome da Vaga: " +
          selected_vaga.vaga_nome +
          "\nQtd de Cadidatos: " +
          selected_vaga.vaga_qtd_incrito +
          "\nData Limite da vaga: " +
          selected_vaga.vaga_dataLimite +
          "\nQuantidade de candidatos: " +
          selected_vaga.vaga_qtd_incrito
        );

        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        alert("Encerrando");
        break;
      default:
        alert("Opção Inválida");
    }

    if (resultado) {
      alert("Resultado = " + resultado);
    }
  } while (opcao !== "6");
}

executar();
