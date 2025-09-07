console.log("Hola, mundo!");


let fila = "";
for (let i = 1; i <= 100; i++) {
    fila += i + " ";
    if (i % 10 === 0) {
        console.log(fila);
        fila = "";
    }
}