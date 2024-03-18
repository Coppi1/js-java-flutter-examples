import React, { useEffect, useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import axios, { Axios } from "axios";

function CadastroCliente() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [dtnasc, setDtNasc] = useState("");
  const [cidades, setCidades] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const enviarDados = () => {
    console.log(
      "Enviando dados: \nNome: " +
        nome +
        "\nEmail: " +
        email +
        "\nDataNascimento: " +
        dtnasc
    );
  };

  const urlTeste = "http://localhost:4000/";

  // metodo para trazer os dados(GET) da API
  async function puxaDados() {
    try {
      await axios
        .get(urlTeste + "cidades") // (http://localhost:4000/cidades)
        .then((response) => setCidades(response.data)); // se tiver resposta, seta array cidades com os dados
    } catch (error) {
      console("Deu ruim");
    }
  }

  // use effect é um hook que inicia logo que a aplicação é iniciada
  useEffect(() => {
    puxaDados();
    //console.log(cidades[0]);
  });

  //
  // useEffect(() => {
  //   /
  //   const buscarDados = async () => {
  //     try {
  //       const resposta = await Axios.get("http://localhost:3000/cidades");
  //       console.log(resposta);
  //       //console.log("Dados: " + resposta.name[0]);
  //     } catch (error) {
  //       console.log("Deu Ruim!!");
  //     }
  //   };
  //   buscarDados();
  // }, []);

  // const [selectedCity, setSelectedCity] = useState(null);
  // const cities = [
  //   { name: "New York", code: "NY" },
  //   { name: "Rome", code: "RM" },
  //   { name: "London", code: "LDN" },
  //   { name: "Istanbul", code: "IST" },
  //   { name: "Paris", code: "PRS" },
  // ];

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
            value={dtnasc}
            onChange={(e) => setDtNasc(e.target.value)}
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
            optionLabel="name"
            placeholder="Select a City"
            className="w-full md:w-14rem"
          />
          <br></br>
          <br></br>
          <Button label="Enviar" onClick={enviarDados} />
        </div>
      </Card>
      <br></br>
      <br></br>
      <h3>Teste de input na API</h3>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" id="inputDesc" placeholder="Informe uma descrição" />
        <br></br>
        <br></br>
        <button type="submit">Salvar</button>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default CadastroCliente;
