import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function CadastroCliente() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [dtnasc, setDtNasc] = useState("");
  const [cidades, setCidades] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [atualizou, setAtualizou] = useEffect(false);

  //Metodo para enviar dados do form para a API
  const enviarDados = () => {
    const novoDadosDoForm = {
      /// correção do cód abaixo comentado
      nome: nome,
      endereco: endereco,
      cidades: selectedCity,
      dtnasc: dtnasc,
    };

    // setDadosDoForm((dadosDoForm) => ({
    //   ...dadosDoForm,
    //   nome: nome,               // está enviando os dados atrasados para api, registros em brancp
    //   endereco: endereco,
    // }));

    const incluirDados = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/clientes",
          novoDadosDoForm
        );
        console.log("Resposta da API: ", response.data);
        setAtualizou(true);
      } catch (error) {
        console.error("Erro ao enviar para API: ", error);
      }
    };

    incluirDados();
  };

  const urlTeste = "http://localhost:4000/";

  // metodo para trazer os dados(GET) da API
  async function listarCidades() {
    try {
      await axios
        .get(urlTeste + "cidades") // (http://localhost:4000/cidades)
        .then((response) => setCidades(response.data)); // se tiver resposta, seta array cidades com os dados
    } catch (error) {
      console.log("Deu ruim ao listar cidades");
    }
  }

  async function listarClientes() {
    try {
      await axios
        .get(urlTeste + "clientes")
        .then((response) => setClientes(response.data));
    } catch (error) {
      console.log("Deu ruim ao listar clientes");
    }
  }

  // use effect é um hook que inicia logo que a aplicação é iniciada
  useEffect(() => {
    listarCidades();
    //console.log(cidades[0]);
    listarClientes();
    atualizou[false];
  }, [atualizou]); // utiliza o atualizou para caso seja incluido um novo dado, ele fique true e atualize a table

  return (
    <div style={{ margin: "0 20%" }}>
      <h1 style={{ textAlign: "center" }}>Cadastro de Clientes</h1>
      <Card>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label> Nome </label>
          <InputText
            id="nome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />

          <br></br>
          <br></br>
          <label> Endereço </label>
          <InputText
            id="endereco"
            value={endereco}
            onChange={(e) => {
              setEndereco(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <label> Data de Nascimento </label>
          <Calendar
            id="dtNasc"
            value={dtnasc}
            onChange={(e) => setDtNasc(e.value)}
          />
          <br></br>
          <br></br>
          <label> Email </label>
          <InputText
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br></br>
          <br></br>
          <label> Cidade </label>
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cidades}
            optionLabel="nomecidade"
            placeholder="Select a City"
            className="w-full md:w-14rem"
          />
          <br></br>
          <br></br>
          <Button label="Enviar" onClick={enviarDados} />
        </div>
      </Card>
      <br></br>
      <DataTable value={clientes}>
        <Column field="id" header="ID"></Column>
        <Column field="nome" header="Nome"></Column>
        <Column field="endereco" header="Endereco"></Column>
      </DataTable>
    </div>
  );
}

export default CadastroCliente;
