//Ej 7
class CuentaBancaria {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    depositar(monto) {
        this.saldo += monto;
        alert(`Monto Depositado: S/${monto}.\nNuevo monto: S/${this.saldo}`);
    }
    retirar(monto) {
        this.saldo -= monto;
        alert(`Monto Retirado: S/${monto}.\nNuevo monto: S/${this.saldo}`);
    }
}
//Ejecucion del Codigo
const cuentaAna = new CuentaBancaria('Ana', 100);

cuentaAna.depositar(50);
cuentaAna.retirar(80);
