import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios';
import { useEffect } from 'react';
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column';
import 'primeicons/primeicons.css';

function CadastroCliente() {
  const [id, setId] = useState()
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [dtnasc, setDtNasc] = useState(null);
  const [atualizou, setAtualizou] = useState(false);

  const [selectedCity, setSelectedCity] = useState(null);
  const [cities, setCities] = useState([]);
  const [dadosDoForm, setDadosDoForm] = useState({
    nome: '',
    endereco: ''
  });

  const [modoEdicao, setModoEdicao] = useState(false); //só ativa(true) ao clicar no botao editar

  const enviarDados = () => {

    const novoDadosDoForm = {
      nome: nome,
      endereco: endereco
    };

    const incluirDados = async () => {
      try {

        if (modoEdicao === false) {
          const response = await axios.post('http://localhost:4000/clientes', novoDadosDoForm);   // post insere novo dado
          console.log('Resposta da API:', response.data);
          setAtualizou(true)
          // Lide com a resposta da API conforme necessário
        }

        if (modoEdicao === true) {
          const response = await axios.put(`http://localhost:4000/clientes/${id}`, novoDadosDoForm);   // put da o update
          setModoEdicao(false)
        }
      } catch (error) {
        console.error('Erro ao enviar dados para a API:', error);
        // Lide com o erro de requisição conforme necessário
      }
    }

    incluirDados();

  }

  useEffect(() => {
    console.log("Executando o useEffect")
    // Função para carregar os dados da api ao abrir o app
    buscarDados();
    // o método listarClientes busca os dados de cliente via api, e passa
    // para o useState clientes.
    listarClientes();
    setAtualizou(false)

  }, [atualizou]
  );

  const buscarDados = async () => {
    try {
      const response = await axios.get('http://localhost:4000/cidades')
      console.log("Dados:" + response.data[0].nomecidade)
      setCities(response.data)
    }
    catch (error) {
      console.log("deu ruim:" + error)
    }
  }

  const listarClientes = async () => {
    try {
      const response = await axios.get('http://localhost:4000/clientes')
      // console.log("Dados de clientes:" + response.data[0].nome)
      setClientes(response.data)
    }
    catch (error) {
      console.log("deu ruim ao listar clientes:" + error)
    }
  }

  const excluirCliente = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/clientes/${id}`)
      setAtualizou(true)
    }
    catch (erro) {
      console.log("Erro ao excluir:" + erro)
    }
  }

  const editarCliente = (rowData) => {
    setId(rowData.id)
    setNome(rowData.nome)
    setEndereco(rowData.endereco)
    setModoEdicao(true)
  }

  const limparCampos = () => {
    setId('')
    setNome('')
    setEndereco('')
  }






  return (
    <div style={{ margin: '0 20%' }}>
      <h1 style={{ textAlign: 'center' }}>Cadastro de Clientes</h1>
      <Card >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label> Nome: </label>
          <InputText id="nome" value={nome} onChange={event => { setNome(event.target.value) }} />
          <br></br> <br></br>



          <label> Endereço: </label>
          <InputText id="endereco" value={endereco} onChange={event => { setEndereco(event.target.value) }} />
          <br></br> <br></br>


          <label> Email: </label>
          <InputText id="email" value={email} onChange={event => { setEmail(event.target.value) }} />
          <br></br> <br></br>
          <label> Dt. Nasc: </label>
          <Calendar value={dtnasc} onChange={(e) => setDtNasc(e.target.value)} showIcon />
          <br></br><br></br>

          <label> Cidade: </label>
          <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="nomecidade"
            placeholder="Selecione a cidade" className="w-full md:w-14rem" />
          <div style={{ display: "-ms-inline-flexbox" }}>
            <Button style={{ paddingRight: "15px" }} label="Enviar" onClick={enviarDados} />
            <Button label="Limpar Campos" onClick={limparCampos} />
          </div>
        </div>
      </Card>

      <DataTable value={clientes}>
        <Column field="id" header="ID"></Column>
        <Column field="nome" header="Nome"></Column>
        <Column field="endereco" header="Endereço" ></Column>
        <Column
          body={(rowData) => (
            <div style={{ padding: "15px" }}>
              <Button
                icon="pi pi-trash"
                className="p-button-rounded p-button-danger"
                onClick={() => excluirCliente(rowData.id)}
              />

              <Button
                icon="pi pi-edit"
                className="p-button-rounded p-button-danger"
                onClick={() => editarCliente(rowData)}
              />

            </div>
          )}
        />




      </DataTable>





    </div>
  );
}

export default CadastroCliente;