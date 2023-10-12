// La inmobiliaria “Sucasa” es una empresa dedicada a la compraventa de casas. Hacer un programa en TypeScript 
// que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Solicitar al usuario el costo de la casa.
// b. Solicitar al usuario el ingreso del tipo de inmueble (1. Usado 2. Nuevo)
// c. Calcular la comisión de la inmobiliaria en la venta así:
// • Si es usado, tiene el 10% de comisión basado en el costo de la vivienda.
// • Si es nuevo, tiene el 12% de la comisión basado en el costo de la vivienda.
// d. El sistema debe mostrar al usuario cuanto es el valor que recibe el propietario y cuanto es el valor recibido 
// por la inmobiliaria.

let cost: number = 20000

function inmobiliaria(): void {
  let type: number = 3;

  while (type > 2 || type < 0) {
    type = 1
  }

  switch (type) {
    case 1: {
      let comisionUsado: number = cost * 0.1;
      let comisionyo: number = cost * 0.9;

      console.log( `Ya que la casa es usada, la inmobiliaria tiene el 10% de la comisión de venta, son ${comisionUsado} y la comisión para el empleado es de ${comisionyo}`);
    
      break;
    }
    case 2: {
      let comisionNuevo: number = cost * 0.12;
      let comisionyo: number = cost * 0.9;

      console.log(`Ya que la casa es nueva, tienes el 12% de la comisión de venta, son ${comisionNuevo} y la comisión para el empleado es de ${comisionyo}`);
     

      break;
    }
  }
}

inmobiliaria();

