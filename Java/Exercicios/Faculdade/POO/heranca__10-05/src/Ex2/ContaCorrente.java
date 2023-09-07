package Ex2;

public class ContaCorrente extends Conta{
    @Override
    void atualiza(double taxa) {
        this.saldo += this.saldo * taxa * 2;
    }

    @Override
    void deposita(double valor) {
        this.saldo += valor - 0.10;
    }
}
