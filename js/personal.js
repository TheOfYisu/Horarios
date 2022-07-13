var cargo
id = localStorage.getItem("ide_personal")
axios.get('http://127.0.0.1:5000/getpersonal/' + id)
    .then(function (response) {
        datos = response.data[0]
        document.getElementById('Nombre').value = datos.name;
        document.getElementById('Apellido').value = datos.lastname;
        document.getElementById('Correo').value = datos.correo;
        document.getElementById('Cargo').value = datos.cargo;
        document.getElementById('Celular').value = datos.telefono;
        document.getElementById('cedula').value = datos.num_ident;
        dpto = document.getElementById('Cargo').value
        localStorage.setItem("cargo", dpto)
        var cargo=dpto
        if (cargo == "Urgencias") {
            document.getElementById('Cargo1').style.display = 'block';
        }
        if (cargo == "Ginecología") {
            document.getElementById('Cargo2').style.display = 'block';
        }
        if (cargo == "Cirujía") {
            document.getElementById('Cargo3').style.display = 'block';
        }
    })
    .catch(function (error) {
        console.log(error);
    });

window.addEventListener('load', function () {
    var cargo = document.getElementById('Cargo').value
    if (cargo == "Urgencias") {
        document.getElementById('Cargo1m').style.display = 'block';
    }
    if (cargo == "Ginecología") {
        document.getElementById('Cargo2m').style.display = 'block';
    }
    if (cargo == "Cirujía") {
        document.getElementById('Cargo3m').style.display = 'block';
    }
})

const HoariosON = () => {
    var departament = document.getElementById('Cargo').value
    var ide = document.getElementById('cedula').value
    if (departament == "Urgencias") {
        cargoempleadosele = document.getElementById("genempeladocargourgencias").value
    } else if (departament == "Ginecología") {
        cargoempleadosele = document.getElementById("genempeladocargoginecologia").value
    } else if (departament == " Cirujía") {
        cargoempleadosele = document.getElementById("genempeladocargocirujia").value
    }
    var mes = document.getElementById("selemes").value
    var validar=false
    if(cargoempleadosele!=""){
        validar=true
    }else{
        validar=false
    }
    if(validar==true){
        if(mes!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if (validar==true){
        const generhorario = {
            cargo_e: cargoempleadosele,
            mesexsele: mes
        }
        axios({
            method: 'POST',
            url: 'http://localhost:2000/creacion/' + ide,
            data: generhorario,
        }).then(vali = confirm("Horario del cargo " + cargoempleadosele + "\nGenerado."))
            .catch(err => console.log('Error: ', err),)
    }else{
        alert("Error, los campos del formulario no deben estar vacios.")
    }
    
}

const Hoariosmostrar = () => {
    var departament = document.getElementById('Cargo').value
    var ide = document.getElementById('cedula').value
    if (departament == "Urgencias") {
        cargoempleadosele = document.getElementById("mostrarcargourgencias").value
    } else if (departament == "Ginecología") {
        cargoempleadosele = document.getElementById("mostrarcargoginecologia").value
    } else if (departament == " Cirujía") {
        cargoempleadosele = document.getElementById("mostrarcargocirujia").value
    }
    var mes = document.getElementById("mostarselemes").value
    var validar=false
    if(cargoempleadosele!=""){
        validar=true
    }else{
        validar=false
    }
    if(validar==true){
        if(mes!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        const generhorario = {
            cargo_ec: cargoempleadosele,
            mesexsele: mes
        }
        const lista = []
        axios({
            method: 'POST',
            url: 'http://localhost:2000/mostrar/' + ide,
            data: generhorario,
        }).then(function (response) {
            var cont = response.data.length
            for (var i = 0; i < cont; i++) {
                datos = response.data[i]
                let lis = []
                var cont2 = datos.length
                for (let j = 0; j < cont2; j++) {
                    datos[j] = String(datos[j])
                    lis.push(datos[j] + "\n")
                }
                lista.push(lis)
            }
            var pos = 0
            for (var i = 0; i < 6; i++) {
                if (mes == "Enero") {
                    if (i == 0) {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    } else {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    }
                } else if (mes == "Febrero") {
                    if (i == 0) {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    } else {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    }
                }else if (mes == "Marzo") {
                    if (i == 0) {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    } else {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    }
                }else if (mes == "Abril") {
                    if (i == 0) {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    } else {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    }
                }else if (mes == "Mayo") {
                    if (i == 0) {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    } else {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    }
                }else if (mes == "Junio") {
                    if (i == 0) {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    } else {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    }
                }else if (mes == "Julio") {
                    if (i == 0) {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    } else {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    }
                }else if (mes == "Agosto") {
                    if (i == 0) {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    } else {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    }
                }else if (mes == "Septiembre") {
                    if (i == 0) {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    } else {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    }
                }else if (mes == "Octubre") {
                    if (i == 0) {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    } else {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    }
                }else if (mes == "Noviembre") {
                    if (i == 0) {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    } else {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    }
                }else if (mes == "Diciembre") {
                    if (i == 0) {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = ""
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    } else {
                        let tablaref = document.getElementById("horariosJ")
                        let newtablarow = tablaref.insertRow(-1)
                        let newtablarefcell = newtablarow.insertCell(0)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(1)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(2)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(3)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(4)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(5)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                        newtablarefcell = newtablarow.insertCell(6)
                        newtablarefcell.textContent = lista[num]
                        num = num + 1
                    }
                }
            }
        })
            .catch(err => console.log('Error: ', err),)
        document.getElementById('horarios').style.display = 'block';
        var num = 0
    }else{
        alert("Error, los campos del formulario no deben estar vacios.")
    }
    
}

const cambiohorario = () => {
    
    ide=document.getElementById("Cambio_cedulae").value
    diaemple=document.getElementById("Cambio_diae").value
    mesemple=document.getElementById("Cambio_mese").value
    validar=false
    if(ide!=""){
        validar=true
    }else{
        validar=false
    }
    if(validar==true){
        if(diaemple!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(mesemple!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if (validar==true) {
        document.getElementById('cambiopor_completo').style.display = 'block';
        const generhorario = {
            mescambio: mesemple,
            diacambio: diaemple
        }
        console.log(generhorario)
        const lista = []
        axios({
            method: 'POST',
            url: 'http://localhost:2000/camioe/' + ide,
            data: generhorario,
        }).then(function (response) {
            datos = response.data[0]
            if(datos==null){
                alert("Lo sentimos pero el empleado no tiene turno del dia buscado o no se encuentra registrado en el sistema, por favor verifique el formulario..")
            }else{
                document.getElementById('cambiopor_completo').style.display = 'block';
                let tablaref = document.getElementById("usuariocambio")
                let newtablarow = tablaref.insertRow(-1)
                let newtablarefcell = newtablarow.insertCell(0)
                newtablarefcell.textContent = datos.nombre
                newtablarefcell = newtablarow.insertCell(1)
                newtablarefcell.textContent = datos.apellido
                newtablarefcell = newtablarow.insertCell(2)
                newtablarefcell.textContent = datos.id
                newtablarefcell = newtablarow.insertCell(3)
                newtablarefcell.textContent = "Turno"
            }
        })
    }else{
        alert("Error, los campos del formulario no deben estar vacios.")
    }
    
}

const eliminardia = () => {
    
    ide=document.getElementById("Cambio_cedulae").value
    diaemple=document.getElementById("Cambio_diae").value
    mesemple=document.getElementById("Cambio_mese").value
    validar=false
    if(ide!=""){
        validar=true
    }else{
        validar=false
    }
    if(validar==true){
        if(diaemple!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(mesemple!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if (validar==true) {
        
        const generhorario2 = {
            mescambio: mesemple,
            diacambio: diaemple
        }
        document.getElementById('cambiopor_completo').style.display = 'block';
        axios({
            method: 'POST',
            url: 'http://localhost:2000/delete/' + ide,
            data: generhorario2,
        }).then(function (response) {
            alert("Horario Cambiado")
        })
    } else {
        alert("Error, los campos del formulario no deben estar vacios.")
    }
    
}
