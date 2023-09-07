package br.com.helloworld.Entidades;

import lombok.Data;
import org.omnifaces.cdi.ViewScoped;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Data
@ViewScoped
@Component
public class Pessoa {
    private Integer cod;
    private String nome;
    private Integer cpf;
    private LocalDate dtNasc;

    private String rua;
    private Integer num;
    private String bairro;
    private String cidade;
    private String estado;
    private Integer cep;
    private String complemento;
}
