function validar2(vali){
    if (vali==true){
        setTimeout('document.location.reload()',1500)
    }
}
const generarjefe= ( )=>{
    var nombre=document.getElementById("nombreSj").value
    var apellido=document.getElementById("apellidoSj").value
    var numidenti=document.getElementById("cedulaSj").value
    nomini=nombre.charAt(0)
    var user=nomini+apellido
    var pass=numidenti
    document.getElementById("inputUserj").value=user
    document.getElementById("inputPassj").value=pass
    document.getElementById('estado2j').style.display = 'block'
}
const generarempleado= ( )=>{
    var nombre=document.getElementById("nombreS").value
    var apellido=document.getElementById("apellidoS").value
    var numidenti=document.getElementById("cedulaS").value
    nomini=nombre.charAt(0)
    var user=nomini+apellido
    var pass=numidenti
    document.getElementById("inputUser").value=user
    document.getElementById("inputPass").value=pass
    document.getElementById('estado2').style.display = 'block'
}


const ingresarempleado= ( )=>{
    var nombre2=document.getElementById("nombreS").value
    var apellido2=document.getElementById("apellidoS").value
    var numidenti=document.getElementById("cedulaS").value
    var email=document.getElementById("emailS").value
    var telefono=document.getElementById("telefonos").value
    var genero=document.getElementById("Genero").value
    var depart=document.getElementById("departamento").value
    var varibale=depart
    if(varibale=="Urgencias"){
        var cargo=document.getElementById("cargourgenciassele").value
    }
    if(varibale=="Ginecologia"){
        var cargo=document.getElementById("cargocinecologiasele").value
    }
    if(varibale=="Ciruia"){
        var cargo=document.getElementById("cargocirujuiasele").value
    }
    var hor_mes=document.getElementById("horas_mes").value
    var hora_dia=document.getElementById("horas_dia").value
    var turno=document.getElementById("tuno").value
    var estado=document.getElementById("estado").value
    var users=document.getElementById("inputUser").value
    var passs=document.getElementById("inputPass").value
    var politicas1=document.getElementById("politica").checked
    var verificar=true
    if (nombre2==""){
        verificar=false
    }
    if(apellido2==""){
        verificar=false
    }
    if(numidenti==""){
        verificar=false
    }
    if(email==""){
        verificar=false
    }
    if(telefono==""){
        verificar=false
    }
    if(genero==""){
        verificar=false
    }
    if(cargo=="seleccione"){
        verificar=false
    }
    if(depart=="seleccione"){
        verificar=false
    }
    if(hor_mes==""){
        verificar=false
    }
    if(hora_dia==""){
        verificar=false
    }
    if(turno=="seleccione"){   
        verificar=false
    }
    if(estado=="seleccione"){  
        verificar=false
    }
    if(politicas1!=true){
        vali1=true
    }else{
        vali1=false
    }
    if (verificar==false){
        alert("Lo sentimos, pero ningún campo puede estar vacío, verifique el formulario.")
    }else if (vali1==true){
        alert("Por favor acepte los terminos y condiciones")  
    }else{
        const personal={
            nombre:nombre2,
            apellido:apellido2,
            numero_identidad:numidenti,
            telefono:telefono,
            correo:email,
            estado:estado,
            genero:genero
        }
        console.log(personal)
        const credenciales={
            usuario:users,
            contraseña:passs,
            ide_personal:numidenti,
            tipodeusuario:"Empleado"
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
            method: 'POST',
            url: 'http://localhost:5000/add_personal',
            data: personal,
        }).then(res => console.log(res), aviso=true)
        .catch(err => console.log('Error: ', err))
        axios ({
            method: 'POST',
            url: 'http://localhost:5000/add_credenciales',
            data: credenciales,
        }).then(res => console.log(res), aviso=true)
        .catch(err => console.log('Error: ', err))
        axios ({
            method: 'POST',
            url: 'http://localhost:5000/add_horario',
            data: horario,
        }).then(res => console.log(res), aviso=true)
        .catch(err => console.log('Error: ', err))
        axios ({
            method: 'POST',
            url: 'http://localhost:5000/add_empleados',
            data: empleado,
        }).then(res => console.log(res), aviso=true)
        .catch(err => console.log('Error: ', err))
        if (aviso==true){
            alert("Los datos se agregaron correctamente a la base de datos.")
        }
        const enviocorreo={
            asunto:"Envio de credenciales a empleados",
            usuario:users,
            contraseña:passs,
            nombre:nombre2,
            apellido:apellido2,
            correo:email,
        }
        axios ({
            method: 'POST',
            url: 'http://localhost:1000/enviocredenciales',
            data: enviocorreo,
        }).then(vali=confirm("Las credenciales fueron enviadas."),validar2(vali))
        .catch(err => console.log('Error: ', err),)
    }

}

const ingresarjefe= ( )=>{
    var nombre2=document.getElementById("nombreSj").value
    var apellido2=document.getElementById("apellidoSj").value
    var numidenti=document.getElementById("cedulaSj").value
    var email=document.getElementById("emailSj").value
    var telefono=document.getElementById("telefonosj").value
    var genero=document.getElementById("Generoj").value
    var numempelecargoj=document.getElementById("numempelecargoj").value
    var depart=document.getElementById("departamentoj").value
    var hor_mes=document.getElementById("horas_mesj").value
    var hora_dia=document.getElementById("horas_diaj").value
    var turno=document.getElementById("tunoj").value
    var estado=document.getElementById("estadoj").value
    var users=document.getElementById("inputUserj").value
    var passs=document.getElementById("inputPassj").value
    var politicas1=document.getElementById("politica1").checked
    var verificar=true
    if (nombre2==""){
        verificar=false
    }
    if(apellido2==""){
        verificar=false
    }
    if(numidenti==""){
        verificar=false
    }
    if(email==""){
        verificar=false
    }
    if(telefono==""){
        verificar=false
    }
    if(genero==""){
        verificar=false
    }
    if(numempelecargoj==""){
        verificar=false
    }
    if(depart==""){
        verificar=false
    }
    if(hor_mes==""){
        verificar=false
    }
    if(hora_dia==""){
        verificar=false
    }
    if(turno==""){   
        verificar=false
    }
    if(estado==""){  
        verificar=false
    }
    if(politicas1!=true){
        vali1=true
    }else{
        vali1=false
    }
    if (verificar==false){
        alert("Lo sentimos, pero ningún campo puede estar vacío, verifique el formulario.")
    }else if (vali1==true){
        alert("Por favor acepte los terminos y condiciones")  
    }else{
        const personal={
            nombre:nombre2,
            apellido:apellido2,
            numero_identidad:numidenti,
            telefono:telefono,
            correo:email,
            estado:estado,
            genero:genero
        }
        console.log(personal)
        const credenciales={
            usuario:users,
            contraseña:passs,
            ide_personal:numidenti,
            tipodeusuario:"Jefe"
        }
        const horario={
            turno:turno,
            horas_al_mes:hor_mes,
            horas_al_dia:hora_dia,
            id_empleado:numidenti
        }
        const jefe={
            id_empleado_e:numidenti,
            numempelecargoj:numempelecargoj,
            dpto_nombre:depart
        }
        var aviso
        axios ({
            method: 'POST',
            url: 'http://localhost:5000/add_personal',
            data: personal,
        }).then(res => console.log(res), aviso=true)
        .catch(err => console.log('Error: ', err))
        axios ({
            method: 'POST',
            url: 'http://localhost:5000/add_credenciales',
            data: credenciales,
        }).then(res => console.log(res), aviso=true)
        .catch(err => console.log('Error: ', err))
        axios ({
            method: 'POST',
            url: 'http://localhost:5000/add_horario',
            data: horario,
        }).then(res => console.log(res), aviso=true)
        .catch(err => console.log('Error: ', err))
        axios ({
            method: 'POST',
            url: 'http://localhost:5000/add_jefes',
            data: jefe,
        }).then(res => console.log(res), aviso=true)
        .catch(err => console.log('Error: ', err))
        if (aviso==true){
            alert("Los datos se agregaron correctamente a la base de datos.")
        }
        const enviocorreo={
            asunto:"Envio de credenciales a jefe",
            usuario:users,
            contraseña:passs,
            nombre:nombre2,
            apellido:apellido2,
            correo:email,
        }
        axios ({
            method: 'POST',
            url: 'http://localhost:1000/enviocredenciales',
            data: enviocorreo,
        }).then(vali=confirm("Las credenciales fueron enviadas."),validar2(vali))
        .catch(err => console.log('Error: ', err),)
    }

}
