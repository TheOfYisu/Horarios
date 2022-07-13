var verificartabla=true
var verificartabla2=true
var verificartabla3=true
var verificartabla4=true
var verificartabla5=true
var verificartabla6=true
var verificartabla7=true
var verificartabla8=true
const Oper= ( )=>{
    var consultas_id=document.getElementById("consultas_id").value
    document.getElementById('consultapersonalall').style.display = 'none';
    document.getElementById('consultapersonalid').style.display = 'none';
    document.getElementById('consultaesatopersonal').style.display = 'none';
    document.getElementById('consultaempelado').style.display = 'none';
    document.getElementById('consultajefes').style.display = 'none';
    document.getElementById('consultajefesid').style.display = 'none';
    if (consultas_id=="allpersonal"){
        if(verificartabla==true){
            axios.get('http://localhost:5000/getAllpersonal')
            .then(function (response) {
                var cont=response.data.length
                for(var i=0;i<cont;i++){
                    datos=response.data[i]
                    let tablaref=document.getElementById("usuarios")
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
                    newtablarefcell.textContent=datos.tipodeusuario
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
            verificartabla=false
        }
        document.getElementById('consultapersonalall').style.display = 'block';
    }
    if(consultas_id=="idpersonal"){
        document.getElementById('consultapersonalid').style.display = 'block';
    }
    if(consultas_id=="est_personal"){
        document.getElementById('consultaesatopersonal').style.display = 'block';
    }
    if(consultas_id=="consularempleadoporjefe"){
        document.getElementById('consultajefesid').style.display = 'block';
    }
    if (consultas_id=="consultajefe"){
        if(verificartabla6==true){
            axios.get('http://localhost:5000/getAlljefe')
            .then(function (response) {
                var cont=response.data.length
                for(var i=0;i<cont;i++){
                    datos=response.data[i]
                    let tablaref=document.getElementById("jefes_all")
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
                    newtablarefcell.textContent=datos.nom_dpto_cargo
                    newtablarefcell= newtablarow.insertCell(7)
                    newtablarefcell.textContent=datos.nombrede_empleadoo
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            verificartabla6=false
        }
        document.getElementById('consultajefes').style.display = 'block';
    }
    if (consultas_id=="consultaempelados"){
        if(verificartabla7==true){
            axios.get('http://localhost:5000/getAllempleado')
            .then(function (response) {
                var cont=response.data.length
                for(var i=0;i<cont;i++){
                    datos=response.data[i]
                    let tablaref=document.getElementById("empleado_all")
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
                    newtablarefcell= newtablarow.insertCell(7)
                    newtablarefcell.textContent=datos.dpto_nombre
                    newtablarefcell= newtablarow.insertCell(8)
                    newtablarefcell.textContent=datos.ide_empleado_J
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            verificartabla7=false
        }
        document.getElementById('consultaempelado').style.display = 'block';
    }
    
}
function busqueda(){
        document.getElementById('usuarios2').style.display = 'block';
        numidenti=document.getElementById("ID_cedula").value
        if(numidenti!=""){
            axios.get('http://localhost:5000/getAllByIdpersonal/'+numidenti)
            .then(function (response) {
                var cont=response.data.length
                for(var i=0;i<cont;i++){
                    datos=response.data[i]
                    console.log(datos)
                    let tablaref=document.getElementById("usuarios2")
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
                        newtablarefcell.textContent=datos.tipodeusuario
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
function busquedajefe(){
        document.getElementById('TablaIDB').style.display = 'block';
        numidenti_jefe=document.getElementById("ID_cedula_jefe").value
        if(numidenti_jefe!=""){
            axios.get('http://localhost:5000/getempleadoByIdjefe/'+numidenti_jefe)
            .then(function (response) {
                var cont=response.data.length
                for(var i=0;i<cont;i++){
                    datos=response.data[i]
                    let tablaref=document.getElementById("tablaid_jefe")
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
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
}
const funcionA= ( )=>{
    var consultasrstado=document.getElementById("consultasrstado").value
    document.getElementById('usuario_3').style.display = 'none';
    document.getElementById('usuario_4').style.display = 'none';
    document.getElementById('usuario_5').style.display = 'none';
    if(consultasrstado=="todo"){
        document.getElementById('usuario_3').style.display = 'block';
        if(verificartabla3==true){
            axios.get('http://localhost:5000/getAllestado')
            .then(function (response) {
                var cont=response.data.length
                for(var i=0;i<cont;i++){
                    datos=response.data[i]
                    let tablaref=document.getElementById("usuarios3")
                    let newtablarow =tablaref.insertRow(-1)
                    let newtablarefcell= newtablarow.insertCell(0)
                    newtablarefcell.textContent=datos.numero_identidad
                    newtablarefcell= newtablarow.insertCell(1)
                    newtablarefcell.textContent=datos.estado
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            verificartabla3=false
        }
    }
    if(consultasrstado=="Activo"){
        document.getElementById('usuario_4').style.display = 'block';
        if(verificartabla4==true){
            axios.get('http://localhost:5000/getAllestado')
            .then(function (response) {
                var cont=response.data.length
                for(var i=0;i<cont;i++){
                    datos=response.data[i]
                    if(datos.estado=="Activo"){
                        let tablaref=document.getElementById("usuarios4")
                        let newtablarow =tablaref.insertRow(-1)
                        let newtablarefcell= newtablarow.insertCell(0)
                        newtablarefcell.textContent=datos.numero_identidad
                        newtablarefcell= newtablarow.insertCell(1)
                        newtablarefcell.textContent=datos.estado
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            verificartabla4=false
        }
    }
    if(consultasrstado=="Inactivo"){
        document.getElementById('usuario_5').style.display = 'block';
        if(verificartabla5==true){
            axios.get('http://localhost:5000/getAllestado')
            .then(function (response) {
                var cont=response.data.length
                for(var i=0;i<cont;i++){
                    datos=response.data[i]
                    if(datos.estado=="Inactivo"){
                        let tablaref=document.getElementById("usuarios5")
                        let newtablarow =tablaref.insertRow(-1)
                        let newtablarefcell= newtablarow.insertCell(0)
                        newtablarefcell.textContent=datos.numero_identidad
                        newtablarefcell= newtablarow.insertCell(1)
                        newtablarefcell.textContent=datos.estado
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            verificartabla5=false
        }
    }
}
