/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.unifio.arraylist;

import java.util.ArrayList;
import javax.swing.JOptionPane;

/**
 *
 * @author educo
 */
public class ex2 {
    public static void main(String[] args) {
        ArrayList<String> lista_contatos = new ArrayList();


        int a = 10;
        String exibe_lista= "";
        int ctt_edit = 9999;
        int ctt_remove = 9999;
        int ctt_busca = 9999;
        String ctt_busca_nome = "";

        while(a != 0){
            a = Integer.parseInt(JOptionPane.showInputDialog(null, "Bem vindo à Agenda!\n"
                + "O que deseja fazer?\n"
                + "1 - Adicionar Contato\n" +
                    "2 - Editar Contato\n" +
                    "3 - Remover Contato\n" +
                    "4 - Buscar Contato\n" +
                    "5 - Exibir Relação Completa\n" +
                    "0 - Sair do Programa"));
            if(a == 1){
                lista_contatos.add(JOptionPane.showInputDialog(null, "Digite o nome do Contato: "));
            }
            if(a == 2){
                exibe_lista = "Sua lista de Contatos: \n";
                for(int i=0; i<lista_contatos.size(); i++){
                    exibe_lista += (i+1) + " - " + lista_contatos.get(i)+ "\n";
                }
                exibe_lista += "\n Digite o Número do contato que deseja editar: ";
                ctt_edit = Integer.parseInt(JOptionPane.showInputDialog(null,exibe_lista))-1;
                lista_contatos.set(ctt_edit, JOptionPane.showInputDialog(null, "Digite o novo nome do contato " + lista_contatos.get(ctt_edit)+ ":"));

            }

            if(a == 3){
                exibe_lista = "Sua lista de Contatos: \n";
                for(int i=0; i<lista_contatos.size(); i++){
                    exibe_lista += (i+1) + " - " + lista_contatos.get(i)+ "\n";
                }
                exibe_lista += "\n Digite o Número do contato que deseja Apagar ";
                ctt_remove = Integer.parseInt(JOptionPane.showInputDialog(null,exibe_lista))-1;
                lista_contatos.remove(ctt_remove);
            }

            if(a == 4){
                exibe_lista = "Sua lista de Contatos: \n";
                for(int i=0; i<lista_contatos.size(); i++){
                    exibe_lista += (i+1) + " - " + lista_contatos.get(i)+ "\n";
                }
                exibe_lista += "\n Digite o nome do contato que procura: ";
                ctt_busca_nome = JOptionPane.showInputDialog(null, exibe_lista);
                ctt_busca = lista_contatos.indexOf(ctt_busca_nome);

                if(ctt_busca != -1){
                    JOptionPane.showMessageDialog(null, "Contato encontrado!\nDados do contato:\nNome: "+lista_contatos.get(ctt_busca));
                } else {
                    JOptionPane.showMessageDialog(null,"Contato não encontrado");
                }

            }

            if(a == 5){
                exibe_lista = "Sua lista de Contatos: \n";
                for(int i=0; i<lista_contatos.size(); i++){
                    exibe_lista += (i+1) + " - " + lista_contatos.get(i)+ "\n";
                }
                JOptionPane.showMessageDialog(null, exibe_lista);
            }
        }
        
    }
}
