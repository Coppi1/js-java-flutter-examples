package Ex2;

import javax.swing.*;

public class testaContas {

    public static void main(String[] args){


        Conta c = new Conta();
        Conta cc = new ContaCorrente();
        Conta cp = new ContaPoupanca();

        c.deposita(1000);
        cc.deposita(1000);
        cp.deposita(1000);

        c.atualiza(0.01);
        cc.atualiza(0.01);
        cp.atualiza(0.01);

        JOptionPane.showMessageDialog(null, c.getSaldo());
        JOptionPane.showMessageDialog(null, cc.getSaldo());
        JOptionPane.showMessageDialog(null, cp.getSaldo());

    }

}
