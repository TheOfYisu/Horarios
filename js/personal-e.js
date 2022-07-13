var ide = localStorage.getItem("ide_personal")
axios.get('http://localhost:2000/mostraremple/'+ide)
.then(function (response){
    var cont=response.data.length
    mes2=response.data[0].mes
    dias2=response.data[0].dias
    var contador=0
    lista=[]
    for(var i=1;i<=dias2;i++){
        datos=response.data[contador]
        var prueba=contador
        if(datos.dia==i){
            lista.push("Turno")
            contador=contador+1
        }else {
            lista.push("Libre")
        }
        if(prueba+1==cont){
            contador=prueba-1
        }
    }
    num=0
    for (var i = 0; i < 6; i++) {
        if (mes2 == "Enero") {
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
        } else if (mes2 == "Febrero") {
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
        }else if (mes2 == "Marzo") {
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
        }else if (mes2 == "Abril") {
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
        }else if (mes2 == "Mayo") {
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
        }else if (mes2 == "Junio") {
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
        }else if (mes2 == "Julio") {
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
        }else if (mes2 == "Agosto") {
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
        }else if (mes2 == "Septiembre") {
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
        }else if (mes2 == "Octubre") {
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
        }else if (mes2 == "Noviembre") {
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
        }else if (mes2 == "Diciembre") {
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