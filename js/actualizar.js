function validar2(vali){
    if (vali==true){
        setTimeout('document.location.reload()',1500)
    }
}
var nombrevar,apellidovar,telefonovar,correovar,estadovar,generovar,hora_diavar,horas_mesvar,turnovar,cargovar,dpto_nombrevar,numidenti,tipod,nombre2,apellido2,verificar2,email
function busqueda(){
    numidenti=document.getElementById("ID_cedula").value
    axios.get('http://localhost:5000/getidcredenciales/' + numidenti)
    .then(function (response) {
    datos=response.data
        tipod=datos.tipodeusuario
    })
    if(tipod=="Jefe"){
        numidenti=document.getElementById("ID_cedula").value
        document.getElementById('actualizaempleado').style.display = 'none';
        document.getElementById('actualizjefe').style.display = 'block';
        axios.get('http://127.0.0.1:5000/getpersonal_actu/' + numidenti)
        .then(function (response) {
        datos=response.data[0]
            document.getElementById("nombreS").value=datos.nombre
            document.getElementById("apellidoS").value=datos.apellido
            document.getElementById("telefonos").value=datos.telefono
            document.getElementById("emailS").value=datos.correo
            document.getElementById("estado3").value=datos.estado
            document.getElementById("Genero").value=datos.genero
            nombrevar=datos.nombre
            apellidovar=datos.apellido
            telefonovar=datos.telefono
            correovar=datos.correo
            estadovar=datos.estado
            generovar=datos.genero
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.get('http://127.0.0.1:5000/gethorario_actu/' + numidenti)
        .then(function (response) {
        datos=response.data[0]
            document.getElementById("horas_mes").value=datos.horas_al_mes
            document.getElementById("horas_dia").value=datos.horas_al_dia
            document.getElementById("tuno2").value=datos.turno
            horas_mesvar=datos.horas_al_mes
            hora_diavar=datos.horas_al_dia
            turnovar=datos.turno
    
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.get('http://127.0.0.1:5000/jefe_actu/' + numidenti)
        .then(function (response) {
        datos=response.data[0]
            document.getElementById("numempelecargoj").value=datos.nombrede_empleado
            document.getElementById("departamentoj").value=datos.nom_dpto_cargo
            numempelecargoj=datos.nombrede_empleado
            departamentoj=datos.dpto_nombre
        })
        .catch(function (error) {
            console.log(error);
        });
    }else if(tipod=="Empleado"){
        numidenti=document.getElementById("ID_cedula").value
        document.getElementById('actualizaempleado').style.display = 'block';
        document.getElementById('actualizjefe').style.display = 'none';
        axios.get('http://127.0.0.1:5000/getpersonal_actu/' + numidenti)
        .then(function (response) {
        datos=response.data[0]
            document.getElementById("nombreS").value=datos.nombre
            document.getElementById("apellidoS").value=datos.apellido
            document.getElementById("telefonos").value=datos.telefono
            document.getElementById("emailS").value=datos.correo
            document.getElementById("estado3").value=datos.estado
            document.getElementById("Genero").value=datos.genero
            nombrevar=datos.nombre
            apellidovar=datos.apellido
            telefonovar=datos.telefono
            correovar=datos.correo
            estadovar=datos.estado
            generovar=datos.genero
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.get('http://127.0.0.1:5000/gethorario_actu/' + numidenti)
        .then(function (response) {
        datos=response.data[0]
            document.getElementById("horas_mes").value=datos.horas_al_mes
            document.getElementById("horas_dia").value=datos.horas_al_dia
            document.getElementById("tuno2").value=datos.turno
            horas_mesvar=datos.horas_al_mes
            hora_diavar=datos.horas_al_dia
            turnovar=datos.turno
    
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.get('http://127.0.0.1:5000/empleado_actu/' + numidenti)
        .then(function (response) {
        datos=response.data[0]
            document.getElementById("cargo").value=datos.cargo
            document.getElementById("departamento").value=datos.dpto_nombre
            cargovar=datos.cargo
            dpto_nombrevar=datos.dpto_nombre
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

const actualizar= ( )=>{
    if(tipod=="Jefe"){
        numidenti=document.getElementById("ID_cedula").value
        if (numidenti==""){
            alert("o sentimos, debe ingresar un numero de identidad, por favor revise el formulario.")
        }else{
            verificar2=true
            var numidenti=document.getElementById("ID_cedula").value
            var nombre2=document.getElementById("nombreS").value
            var apellido2=document.getElementById("apellidoS").value
            var email=document.getElementById("emailS").value
            var telefono=document.getElementById("telefonos").value
            var genero=document.getElementById("genero3").value
            var numempelecargoj=document.getElementById("numempelecargoj").value
            var dpto_nombre=document.getElementById("departamentoj").value
            var hor_mes=document.getElementById("horas_mes").value
            var hora_dia=document.getElementById("horas_dia").value
            var turno=document.getElementById("turno").value
            var estado=document.getElementById("estado2").value
            if (nombre2==""){
                nombre2=nombrevar
            }
            if(apellido2==""){
                apellido2=apellidovar
            }
            if(email==""){
                email=correovar
            }
            if(telefono==""){
                telefono=telefonovar
            }
            if(genero=="seleccione"){
                genero=generovar
            }
            if(numempelecargoj==""){
                cargo=cargovar
            }
            if(dpto_nombre==""){
                dpto_nombre=dpto_nombrevar
            }
            if(hor_mes==""){
                hor_mes=hora_diavar
            }
            if(hora_dia==""){
                hora_dia=hora_diavar
            }
            if(turno=="seleccione"){   
                turno=turnovar
            }
            if(estado=="seleccione"){  
                estado=estadovar
            }
            const personal={
                nombre:nombre2,
                apellido:apellido2,
                telefono:telefono,
                correo:email,
                estado:estado,
                genero:genero
            }
            const horario={
                turno:turno,
                horas_al_mes:hor_mes,
                horas_al_dia:hora_dia,
                id_empleado:numidenti
            }
            var aviso
            axios ({
                method: 'PUT',
                url: 'http://localhost:5000/updatepersonal/'+numidenti,
                data: personal,
            }).then(aviso=true)
            axios ({
                method: 'PUT',
                url: 'http://localhost:5000/updatehorario/'+numidenti,
                data: horario,
            }).then(aviso=true)       
            if (aviso==true){
                alert("Los datos se actualizaron correctamente a la base de datos.")
            }
        }
    }else if(tipod=="Empleado"){
        numidenti=document.getElementById("ID_cedula").value
        if (numidenti==""){
            alert("o sentimos, debe ingresar un numero de identidad, por favor revise el formulario.")
        }else{
            verificar2=true
            var numidenti=document.getElementById("ID_cedula").value
            var nombre2=document.getElementById("nombreS").value
            var apellido2=document.getElementById("apellidoS").value
            var email=document.getElementById("emailS").value
            var telefono=document.getElementById("telefonos").value
            var genero=document.getElementById("genero3").value
            var cargo=document.getElementById("cargo").value
            var depart=document.getElementById("departamento").value
            var hor_mes=document.getElementById("horas_mes").value
            var hora_dia=document.getElementById("horas_dia").value
            var turno=document.getElementById("turno").value
            var estado=document.getElementById("estado2").value
            if (nombre2==""){
                nombre2=nombrevar
            }
            if(apellido2==""){
                apellido2=apellidovar
            }
            if(email==""){
                email=correovar
            }
            if(telefono==""){
                telefono=telefonovar
            }
            if(genero=="seleccione"){
                genero=generovar
            }
            if(cargo==""){
                cargo=cargovar
            }
            if(depart==""){
                depart=dpto_nombrevar
            }
            if(hor_mes==""){
                hor_mes=hora_diavar
            }
            if(hora_dia==""){
                hora_dia=hora_diavar
            }
            if(turno=="seleccione"){   
                turno=turnovar
            }
            if(estado=="seleccione"){  
                estado=estadovar
            }
            const personal={
                nombre:nombre2,
                apellido:apellido2,
                telefono:telefono,
                correo:email,
                estado:estado,
                genero:genero
            }
            const horario={
                turno:turno,
                horas_al_mes:hor_mes,
                horas_al_dia:hora_dia,
                id_empleado:numidenti
            }
            const empleado={
                id_empleado_e:numidenti,
                cargo:cargo,
                dpto_nombre:depart
            }
            var aviso
            axios ({
                method: 'PUT',
                url: 'http://localhost:5000/updatepersonal/'+numidenti,
                data: personal,
            }).then(aviso=true)
            axios ({
                method: 'PUT',
                url: 'http://localhost:5000/updatehorario/'+numidenti,
                data: horario,
            }).then(aviso=true)
            axios ({
                method: 'PUT',
                url: 'http://localhost:5000/updateempleado/'+numidenti,
                data: empleado,
            }).then(aviso=true)
        
            if (aviso==true){
                alert("Los datos se actualizaron correctamente a la base de datos.")
            }
        }
    }
    if(verificar2==true){
        const enviocorreo={
            asunto:"Actualizacion informacion",
            nombre:nombre2,
            apellido:apellido2,
            correo:email,
            numidenti:numidenti
        }
        axios ({
            method: 'POST',
            url: 'http://localhost:1000/enviocambio',
            data: enviocorreo,
        }).then(vali=confirm("Se informo al usuario del cambio"),validar2(vali))
        .catch(err => console.log('Error: ', err),)
    }
}


