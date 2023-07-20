// CREAMOS EL PLANO PARA LAS TRANSACCIONES

class Transacciones {
  constructor(descripcion, importe, fecha) {
    this.descripcion = descripcion;
    this.importe = importe;
    this.fecha = fecha;
  }
}
// CREO EL ARRAY PARA GUARDARLAS
const transacciones = []
    //////// EMPIEZO A CREAR LAS FUNCIONES ////////


// AGREGAR UNA TRANSACCION - LLAMANDO CON NEW AL CONSTRUCTOR Y LA PUSHEAMOS AL ARRAY

const agregarTransaccion = (descripcion, importe, fecha) => {
const nuevaTransaccion = new Transacciones(descripcion, importe, fecha);
transacciones.push(nuevaTransaccion)
return nuevaTransaccion
};

// CALCULAR EL SALDO TOTAL DE LAS TRANSACCIONES (REDUCE)
const calcularSaldo = () => {
    const resultado = transacciones.reduce((saldo, transaccion) => saldo + transaccion.importe, 0);
    return(resultado);
};

// (MAP) FUNCION PARA QUE ME MUESTRE EL RESUMEN DE LAS TRANSACCIONES CON EL SALDO
const balanceTotal = () => {
    const resumen = transacciones.map((transaccion) => {
        return`${transaccion.fecha} ${transaccion.descripcion} : ${transaccion.importe}`
    });
    const saldoActual = calcularSaldo();
    resumen.push(`Balance Actual: ${saldoActual}`)
    alert('Resumen Financiero\n' + resumen.join('\n'));
}

// CREAMOS ARRAY CON LOS COMANDOS DISPONIBLES
const comandos = [
    {nombre: `agregar`,
    action: () => {agregarTransaccion(prompt('Ingrese la descripción:'), Number(prompt('Ingrese el monto:')), prompt('Ingrese la fecha (YYYY-MM-DD):')) }
  },
    {nombre: `resumen`,
    action: () => balanceTotal() 
  }
];

//CREAMOS LA FUNCION DEL SIMULADOR

let continuarSimulador = true
const simulador = () => {
    alert(`Bienvenido`)
    do {
        let comando = prompt(
            `Cual comando desea realizar:
            1- Agregar
            2- Resumen
        `).toLowerCase();
        comando = comandos.find((comandoUsuario) => comandoUsuario.nombre === comando)
        if (comando) {
            comando.action()
        } else {alert(`Comando no reconocido.`)
        }

        continuarSimulador = confirm(`Desea Continuar?`)
    } while (continuarSimulador)

    const resumen = balanceTotal().join(`\n`)
    alert(`${resumen}`)
    alert

};

//////// CREO LOS FILTROS

// (FILTER)FILTRO POR DESCRIPCION

// FILTRO POR FECHA

// FILTRO POR MONTO (ASC O DESC)



    //////// SIMULADOR ////////

simulador()








