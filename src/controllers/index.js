import { Conversion } from "../models/Conversion.js";

function convert() {
    const infija = document.getElementById('notinfija').value;
    const conversion = new Conversion();
    const prefija = conversion.infijaprefija(infija);
    document.getElementById("Resultado").innerText = "NOTACIÓN PREFIJA: " + prefija;
}

window.onload = function() {
    window.convert = convert;
};
