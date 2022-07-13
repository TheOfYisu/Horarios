var Cedula
var verificartabla=true
var verificartabla2=true
var verificartabla3=true
id = localStorage.getItem("ide_personal")
axios.get('http://127.0.0.1:5000/getpersonal/' + id)
.then(function (response) {
    datos=response.data[0]
    Cedula=datos.num_ident;   
})
.catch(function (error) {
    console.log(error);
});

const Oper= ( )=>{
    var consultas_id=document.getElementById("consultas_id").value

    if (consultas_id=="TodosDepartamento"){
        document.getElementById('TablaEstado').style.display = 'none';
        document.getElementById('consultapersonalid').style.display = 'none';
        document.getElementById('Pdepartamento').style.display = 'block';
        document.getElementById('Tablehorarios').style.display = 'none';

        if(verificartabla==true){
            axios.get('http://localhost:5000/getALLdepartamento/'+Cedula)
            .then(function (response) {
                var cont=response.data.length
                for(var i=0;i<cont;i++){
                    datos=response.data[i]
                    let tablaref=document.getElementById("usuariosD")
                    let newtablarow =tablaref.insertRow(-1)
                    let newtablarefcell= newtablarow.insertCell(0)
                    newtablarefcell.textContent=datos.nombre
                    newtablarefcell= newtablarow.insertCell(1)
                    newtablarefcell.textContent=datos.apellido
                    newtablarefcell= newtablarow.insertCell(2)
                    newtablarefcell.textContent=datos.numero_identidad
                    newtablarefcell= newtablarow.insertCell(3)
                    newtablarefcell.textContent=datos.telefono
                    newtablarefcell= newtablarow.insertCell(4)
                    newtablarefcell.textContent=datos.correo
                    newtablarefcell= newtablarow.insertCell(5)
                    newtablarefcell.textContent=datos.genero
                    newtablarefcell= newtablarow.insertCell(6)
                    newtablarefcell.textContent=datos.cargo
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            verificartabla=false
        }
    }
    if (consultas_id=="EstadoDepartamento"){
        document.getElementById('TablaEstado').style.display = 'block';
        document.getElementById('Pdepartamento').style.display = 'none';
        document.getElementById('consultapersonalid').style.display = 'none';
        document.getElementById('Tablehorarios').style.display = 'none';

    }
    if (consultas_id=="BuscarID"){
        document.getElementById('TablaEstado').style.display = 'none';
        document.getElementById('Pdepartamento').style.display = 'none';
        document.getElementById('consultapersonalid').style.display = 'block';
        document.getElementById('Tablehorarios').style.display = 'none';
        consultapersonalid

    }
    if(consultas_id=="Id_horarios"){
        document.getElementById('Tablehorarios').style.display = 'block';
        document.getElementById('TablaEstado').style.display = 'none';
        document.getElementById('Pdepartamento').style.display = 'none';
        document.getElementById('consultapersonalid').style.display = 'none';
    }
}

const funcionA= ( )=>{
    var consultas_Estado=document.getElementById("consultasrstado").value
    if (consultas_Estado=="Activo"){
        document.getElementById('usuario_4').style.display = 'none';
        document.getElementById('usuario_3').style.display = 'block';
        if(verificartabla2==true){
            axios.get('http://localhost:5000/getAllestadoDEP/'+Cedula)
            .then(function (response) {
                var cont=response.data.length
                for(var i=0;i<cont;i++){
                    datos=response.data[i]
                    if(datos.Estado=="Activo"){
                        let tablaref=document.getElementById("usuariosA")
                        let newtablarow =tablaref.insertRow(-1)
                        let newtablarefcell= newtablarow.insertCell(0)
                        newtablarefcell.textContent=datos.Nombre
                        newtablarefcell= newtablarow.insertCell(1)
                        newtablarefcell.textContent=datos.Apellido
                        newtablarefcell= newtablarow.insertCell(2)
                        newtablarefcell.textContent=datos.Numero_identidad
                        newtablarefcell= newtablarow.insertCell(3)
                        newtablarefcell.textContent=datos.Estado
                        console.log(datos)
                    }
                        
                }
            })
             .catch(function (error) {
                console.log(error);
            });
             verificartabla2=false
        }            
    }else if (consultas_Estado=="Inactivo"){
        document.getElementById('usuario_3').style.display = 'none'; 
        document.getElementById('usuario_4').style.display = 'block';
        if(verificartabla3==true){
            axios.get('http://localhost:5000/getAllestadoDEP/'+Cedula)
            .then(function (response) {
                var cont=response.data.length
                for(var i=0;i<cont;i++){
                    datos=response.data[i]
                    if(datos.Estado=="Inactivo"){
                        let tablaref=document.getElementById("usuariosI")
                        let newtablarow =tablaref.insertRow(-1)
                        let newtablarefcell= newtablarow.insertCell(0)
                        newtablarefcell.textContent=datos.Nombre
                        newtablarefcell= newtablarow.insertCell(1)
                        newtablarefcell.textContent=datos.Apellido
                        newtablarefcell= newtablarow.insertCell(2)
                        newtablarefcell.textContent=datos.Numero_identidad
                        newtablarefcell= newtablarow.insertCell(3)
                        newtablarefcell.textContent=datos.Estado
                        console.log(datos)
                    }
                        
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            verificartabla3=false
        }          
    }
        
        
}
function busqueda(){
    numidenti=document.getElementById("ID_cedula").value
    document.getElementById('usuariosID').style.display = 'block';
    if(numidenti!=""){
        axios.get('http://localhost:5000/getAllByIdpersonal/'+numidenti)
        .then(function (response) {
            var cont=response.data.length
            for(var i=0;i<cont;i++){
                datos=response.data[i]
                console.log(datos)
                let tablaref=document.getElementById("usuariosID")
                let newtablarow =tablaref.insertRow(-1)
                    let newtablarefcell= newtablarow.insertCell(0)
                    newtablarefcell.textContent=datos.nombre
                    newtablarefcell= newtablarow.insertCell(1)
                    newtablarefcell.textContent=datos.apellido
                    newtablarefcell= newtablarow.insertCell(2)
                    newtablarefcell.textContent=datos.numero_identidad
                    newtablarefcell= newtablarow.insertCell(3)
                    newtablarefcell.textContent=datos.telefono
                    newtablarefcell= newtablarow.insertCell(4)
                    newtablarefcell.textContent=datos.correo
                    newtablarefcell= newtablarow.insertCell(5)
                    newtablarefcell.textContent=datos.estado
                    newtablarefcell= newtablarow.insertCell(6)
                    newtablarefcell.textContent=datos.genero
                    newtablarefcell= newtablarow.insertCell(7)
                    newtablarefcell.textContent=datos.cargo
                    newtablarefcell= newtablarow.insertCell(8)
                    newtablarefcell.textContent=datos.horas_al_dia
                    newtablarefcell= newtablarow.insertCell(9)
                    newtablarefcell.textContent=datos.horas_al_mes
                    newtablarefcell= newtablarow.insertCell(10)
                    newtablarefcell.textContent=datos.turno
            }

        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
function busquedaH(){
    document.getElementById('horariosCON').style.display = 'block';
    var ide = document.getElementById('ID_cedula32').value
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
                let tablaref = document.getElementById("horariosCON")
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
}