import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";

import { Axios } from "axios";

function CadastroCliente() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [dtnasc, setDtNasc] = useState("");

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

  // use effect é um hook que inicia logo que a aplicação é iniciada
  useEffect(() => {
    // Função para carregar dados da API ao iniciar app
    const buscarDados = async () => {
      try {
        const resposta = await Axios.get("http://localhost:4000/cidades");
        // console.log(resposta.data)
        console.log("Dados: " + resposta.data[0].name);
      } catch (error) {
        console.log("Deu Ruim!!");
      }
    };

    buscarDados();
  }, []);

  //   const alterarNome = (e) => {
  //     setNome(e.target.value);
  //     console.log("Nome: " + nome);
  //   };

  //   const alterarEndereco = (e) => {
  //     setEndereco(e.target.value);
  //     console.log("Endereco: " + endereco);
  //   };

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

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
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="w-full md:w-14rem"
          />
          <br></br>
          <br></br>
          <Button label="Enviar" onClick={enviarDados} />
        </div>
      </Card>
    </div>
  );
}

export default CadastroCliente;
