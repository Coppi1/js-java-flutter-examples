package br.com.helloworld.controladores;

import br.com.helloworld.Entidades.Pessoa;
import lombok.Data;
import org.omnifaces.cdi.ViewScoped;
import org.omnifaces.util.Messages;
import org.springframework.stereotype.Component;

@Data
@Component
@ViewScoped
public class ex1Controller {

    private Pessoa p = new Pessoa();

    public void salvar(){

        Messages.addFlashGlobalInfo("Registro salvo");

    }

}
