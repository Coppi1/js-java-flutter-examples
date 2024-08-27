import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import CadastroCliente from "./CadastroCliente";
import { Filmes } from "./Filmes";

function App() {
  //json server: https://blog.rocketseat.com.br/criando-uma-api-falsa-com-json-server/

  //para startar son server, entrar em outro terminal e dar o cd para a pasta do json
  //npx json-server --watch data.json -p 4000

  return (
    <div className="App">
      {/* <CadastroCliente></CadastroCliente> */}



      <Filmes titulo="VIngadores a extinção do Marolas" popularidade="10"></Filmes>


    </div>
  );
}

export default App;
