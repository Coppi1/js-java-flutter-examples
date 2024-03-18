let nextVagaId = 1;

function createVaga(nome, disponivel) {
  const vaga = {
    vaga_id: nextVagaId,
    vaga_nome: nome,
    vaga_qtd_incrito: 0,
    vaga_disponivel: disponivel,
  };
  nextVagaId++;
  return vaga;
}

let vagas = [];

let nextCandidatoId = 1;

function createCandidato(nome, vaga) {
  const candidato = {
    candidato_id: nextCandidatoId,
    candidato_nome: nome,
    candidato_id_vaga: vaga,
  };
  nextCandidatoId++;
  return candidato;
}

let candidatos = [];

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
        vagas.forEach(function (i) {
          alert(
            "Vaga ID: " +
              i.vaga_id +
              "\nVaga Nome: " +
              i.vaga_nome +
              "\nVaga Qtd de Cadidatos: " +
              i.vaga_qtd_incrito
          );
        });
        break;
      case "2":
        let disponivel = prompt("A vaga está disponivel? 1 ou Sim | 2 ou Não");
        const nome = prompt("Digite o Nome da vaga: ");
        const qtd = prompt("Digite a quantidade de pessoas inscritas: ");

        const confirmacao = confirm(
          "Salvar esta vaga?\n" +
            "\nNome da Vaga: " +
            nome +
            "\nQuantidade de pessoas na vaga: " +
            qtd +
            "\nVaga disponível?: " +
            disponivel
        );

        if (disponivel == "sim" || disponivel == "1") {
          disponivel = true;
        } else {
          disponivel = false;
        }

        if (confirmacao) {
          vagas.push(createVaga(nome, qtd, disponivel));
        }

        console.log(vagas);

        break;
      case "3":
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
