let gastos = [];
let idGasto = 0;
let presupuesto = 0;

function actualizarPresupuesto(presAct)
{
    presupuesto = presAct;

    return presupuesto;
}

function mostrarPresupuesto()
{
    return (`Tu presupuesto es: ${presupuesto} €.`)
}

function CrearGasto (descripcion, valor)
{
    this.descripcion = descripcion;

    this.valor = valor;
}

function listarGastos()
{
    return gastos;
}

function anyadirGastos(gasto)
{
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
}

function calcularTotalGastos()
{
    let total = 0;

    for (let i=0; i < gastos.length; i++)
        {
            total = total + gastos[i].valor;
        }
        return total;
}

function calcularBalance()
{
    let balance;

    balance = presupuesto - calcularTotalGastos();

    return balance;
}

export {
    mostrarPresupuesto, 
    CrearGasto,
    listarGastos, 
    anyadirGastos, 
    calcularTotalGastos,
    calcularBalance, 
    actualizarPresupuesto
}