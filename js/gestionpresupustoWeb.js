import * as gesPres from "./gestionpresupuesto.js";

function mostrarDatoEnId(idElemento, valor)
{
    document.getElementById(idElemento).innerHTML = valor;
}

function mostrarGastoWeb(idElemeto, gasto)
{
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');

    div.className = "gasto";
    div1.className = "gasto-descripcion";
    div2.className = "gasto-valor";

    div1.append(gasto.descripcion);
    div2.append(gasto.valor);

    div.append(div1);
    div.append(div2);

    let contenido = document.getElementById(idElemeto);
    contenido.append(div);
}

function repintar()
{
    mostrarDatoEnId("presupuesto", gesPres.mostrarPresupuesto())
    mostrarDatoEnId("gastos-totales", gesPres.calcularTotalGastos());
    mostrarDatoEnId("balance-total", gesPres.calcularBalance());

    document.getElementById("listado-gastos-completo").innerHTML ="";

    let mostrarLista = gesPres.listarGastos();

    for (let g of mostrarLista)
    {
        mostrarGastoWeb("listado-gastos-completo", g);
    }
}

function actualizarPresupuestoWeb()
{
    this.handleEvent = function(e)
    {
        let nuevoValor = prompt("introduce valor");

        gesPres.actualizarPresupuesto(nuevoValor);

        repintar();
    }
}

let manejadorActualizar = new actualizarPresupuestoWeb()
let butActualizar = document.getElementById("actualizarpresupuesto");
butActualizar.addEventListener("click", manejadorActualizar);


function nuevoGastoWeb()
{
    this.handleEvent = function(e)
    {
        let nuevaDesc = prompt("introduce dezxscqwre");
        let nuevoValor = prompt("introduce un valor aqui");

        let nuevoGasto = new gesPres.CrearGasto(nuevaDesc, nuevoValor);

        gesPres.anyadirGastos(nuevoGasto);

        repintar();
    }
}

let manejadorNuevoGasto = new nuevoGastoWeb();
let butAnyadirGasto = document.getElementById("anyadirGasto");
butAnyadirGasto.addEventListener("click", manejadorNuevoGasto);


function nuevoGastoWebForm()
{
    this.handleEvent = function(e)
    {
        let plantillaFormulario = document.getElementById("formulario-template").content.cloneNode(true);
        var formulario = plantillaFormulario.querySelector("form");
        
        let manejadorEnv = new manejadorEnviar();
        formulario.addEventListener("submit", manejadorEnv);

        document.getElementById("controlesprincipales").append(formulario);

    }
}

let manejadorForm = new nuevoGastoWebForm();
let butAnyadirFormn = document.getElementById("anyadirgasto-formulario");
butAnyadirFormn.addEventListener("click", manejadorForm);

function manejadorEnviar()
{
    this.handleEvent = function(e)
    {
        e.preventDefault();
        let form = e.currentTarget;

        let nuevaDesc = form.elements.descripcion.value;
        let nuevoValor = form.elements.valor.value;

        let nuevoGastoForm = new gesPres.CrearGasto(nuevaDesc, nuevoValor);
        gesPres.anyadirGastos(nuevoGastoForm);

        repintar();
    }
}

export {
    mostrarDatoEnId,
    mostrarGastoWeb, 
}