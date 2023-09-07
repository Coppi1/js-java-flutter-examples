package Ex2;

public class ContaPoupanca extends Conta{
    @Override
    void atualiza(double taxa) {
        this.saldo += this.saldo * taxa * 3;
    }
}
