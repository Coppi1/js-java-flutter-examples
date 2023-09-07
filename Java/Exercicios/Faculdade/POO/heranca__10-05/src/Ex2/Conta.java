package Ex2;

public class Conta {
    protected double saldo;

    void deposita(double valor){
        this.saldo +=valor;
    }

    void saca(double valor){
        this.saldo -= valor;
    }

    double getSaldo(){
        return this.saldo;
    }

    void atualiza(double taxa){
        this.saldo += this.saldo * taxa;
    }

}
