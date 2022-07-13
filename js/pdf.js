function prueba(){
    const invoice = this.document.getElementById("horariosJ");
    var mes=document.getElementById("mostarselemes").value
    var departament = document.getElementById('Cargo').value
    if (departament == "Urgencias") {
        cargoempleadosele = document.getElementById("mostrarcargourgencias").value
    } else if (departament == "Ginecología") {
        cargoempleadosele = document.getElementById("mostrarcargoginecologia").value
    } else if (departament == " Cirujía") {
        cargoempleadosele = document.getElementById("mostrarcargocirujia").value
    }
    var opt = {
        margin: 1,
        filename: 'horario'+mes+cargoempleadosele+'.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(invoice).set(opt).save();
}
function prueba2(){
    const invoice = this.document.getElementById("usuariosD");
    var opt = {
        margin: 1,
        filename: 'empleadosdepartament.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'A3', orientation: 'landscape' }
    };
    html2pdf().from(invoice).set(opt).save();
}
function prueba3(){
    const invoice = this.document.getElementById("usuarios");
    var opt = {
        margin: 1,
        filename: 'usuariosall.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'A3', orientation: 'landscape' }
    };
    html2pdf().from(invoice).set(opt).save();
}
function prueba4(){
    const invoice = this.document.getElementById("jefes_all");
    var opt = {
        margin: 1,
        filename: 'jefes_all.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'A3', orientation: 'landscape' }
    };
    html2pdf().from(invoice).set(opt).save();
}
function prueba5(){
    const invoice = this.document.getElementById("empleado_all");
    var opt = {
        margin: 1,
        filename: 'empleado_all.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'A3', orientation: 'landscape' }
    };
    html2pdf().from(invoice).set(opt).save();
}
function pdfempleado(){
    const invoice = this.document.getElementById("horariosJ");
    var opt = {
        margin: 1,
        filename: 'horario.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'A3', orientation: 'portrait' }
    };
    html2pdf().from(invoice).set(opt).save();
}