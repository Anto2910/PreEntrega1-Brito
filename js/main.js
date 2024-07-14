function CalculoDeInteres() {
    let nombreProducto;
    do {
        nombreProducto = prompt("Seleccione un producto:\n1. Caja Galletitas\n2. Caja Merengues\n3. Caja Chocolate");
        switch (nombreProducto) {
            case "1":
                nombreProducto = "Caja Galletitas";
                break;
            case "2":
                nombreProducto = "Caja Merengues";
                break;
            case "3":
                nombreProducto = "Caja Chocolate";
                break;
            default:
                alert("Opción no válida, por favor seleccione una opción del 1 al 3.");
                nombreProducto = null;
        }
    } while (!nombreProducto);

    let num1;
    do {
        num1 = parseInt(prompt("Ingresar Precio"));
    } while (isNaN(num1));

    let num2;
    do {
        num2 = parseInt(prompt("Ingrese Porcentaje de interes/descuento"));
    } while (isNaN(num2));

    let operacion;
    do {
        operacion = prompt(`
        Seleccione una operación:
        +  Interes
        -  Descuento
        `);
    } while (operacion !== "+" && operacion !== "-");

    function calcular(numero1, numero2, operacionMatematica) {
        switch (operacionMatematica) {
            case "+":
                return numero1 + numero1 * numero2 / 100;
            case "-":
                return numero1 - numero1 * numero2 / 100;
            default:
                return "Operación inválida";
        }
    }

    let resultado = calcular(num1, num2, operacion);
    alert("El resultado es: " + resultado);

    if (confirm("Calcular nuevo producto")) {
        CalculoDeInteres();
    }
}

CalculoDeInteres();