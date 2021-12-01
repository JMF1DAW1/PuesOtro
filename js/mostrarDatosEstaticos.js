import * as gesPres from "./gestionpresupuesto.js";
import * as gesPresWeb from "./gestionpresupustoWeb.js";

gesPres.actualizarPresupuesto(23423);

gesPresWeb.mostrarDatoEnId("presupuesto", gesPres.mostrarPresupuesto())
gesPresWeb.mostrarDatoEnId("gastos-totales", gesPres.calcularTotalGastos());
gesPresWeb.mostrarDatoEnId("balance-total", gesPres.calcularBalance());

let g1 = new gesPres.CrearGasto("pollo", 12);
let g2 = new gesPres.CrearGasto("pavo", 11);

gesPres.anyadirGastos(g1);
gesPres.anyadirGastos(g2);


let lista = gesPres.listarGastos();

for (let g of lista)
{
    gesPresWeb.mostrarGastoWeb("listado-gastos-completo", g);
}

