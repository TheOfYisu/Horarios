var nombreS,apellidoS,correoS,telefonoS,nombreSE,apellidoSE,correoSE,telefonoSE,estadoSE,nombreSA,apellidoSA,correoSA,telefonoSA
function validar2(vali){
    if (vali==true){
        setTimeout('document.location.reload()',1500)
    }
}
id = localStorage.getItem("ide_personal")
axios.get('http://127.0.0.1:5000/getpersonal/' + id)
.then(function (response) {
    datos=response.data[0]
    nombreS=document.getElementById('nombreS').value = datos.name;
    apellidoS=document.getElementById('apellidoS').value = datos.lastname;
    correoS=document.getElementById('emailS').value = datos.correo;
    telefonoS=document.getElementById('cellS').value = datos.telefono;
    nombreSA=document.getElementById('nombreSA').value = datos.name;
    apellidoSA=document.getElementById('apellidoSA').value = datos.lastname;
    correoSA=document.getElementById('emailSA').value = datos.correo;
    telefonoSA=document.getElementById('cellSA').value = datos.telefono;
})
.catch(function (error) {
    console.log(error);
});
const BuscarE= ()=>{
    ide = document.getElementById("ID_cedula").value
    axios.get('http://localhost:5000/getIdcambio/'+ide)
    .then(function (response) {
        datos=response.data[0]
        nombreSE=document.getElementById('nombreSE').value = datos.name;
        apellidoSE=document.getElementById('apellidoSE').value = datos.apellido;
        correoSE=document.getElementById('emailSE').value = datos.email;
        telefonoSE=document.getElementById('cellSE').value = datos.telefono;
        estadoSE=document.getElementById('EstadoEmpleadoS').value =datos.estado;
    })
    .catch(function (error) {
        console.log(error);
    });
}

const EnviarSJ= ( )=>{
    var validar=false
    var solicitudesS=document.getElementById("solicitudS").value
    if(nombreS!=""){
        validar=true
    }else{
        validar=false
    }
    if(validar==true){
        if(apellidoS!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(correoS!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(telefonoS!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(solicitudesS!=""){
            validar=true
        }else{
            validar=false
        }
    }
 
    if (validar==true){
        const envicorreo={
            asunto:"Cambio de informacion persona",
            destina:"bjfernandez@itsa.edu.co",
            name:nombreS,
            apellidoSO:apellidoS,
            correoSO:correoS,
            telefonoSO:telefonoS,
            solicitudesSO:solicitudesS


        }
        axios ({
            method: 'POST',
            url: 'http://localhost:1000/envio3',
            data: envicorreo,
        }).then(vali=confirm("Se a enviado su \nSolicitud."),validar2(vali))
        .catch(err => console.log('Error: ', err),)
    }else{
        alert("Error, los campos del formulario no deben estar vacios.")
    }
}
const EnviarSE= ( )=>{
    var validar=false
    var solicitudesSE=document.getElementById("solicitudSE").value
    if(nombreSE!=""){
        validar=true
    }else{
        validar=false
    }
    if(validar==true){
        if(apellidoSE!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(correoSE!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(telefonoSE!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(solicitudesSE!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(nombreSA!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(apellidoSA!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(correoSA!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(telefonoSA!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if (validar==true){
        const envicorreo={
            asunto:"Cambio de informacion de estado del empleado",
            destina:"bjfernandez@itsa.edu.co",
            nombreSOE:nombreSE,
            apellidoSOE:apellidoSE,
            correoSOE:correoSE,
            telefonoSOE:telefonoSE,
            estadoSOE:estadoSE,
            solicitudesSOE:solicitudesSE,

            nombreSF:nombreSA,
            apellidoSF:apellidoSA,
            correoSF:correoSA,
            telefonoSF:telefonoSA,
        }
        axios ({
            method: 'POST',
            url: 'http://localhost:1000/envio4',
            data: envicorreo,
        }).then(vali=confirm("Se a enviado su \nSolicitud."),validar2(vali))
        .catch(err => console.log('Error: ', err),)
    }else{
        alert("Error, los campos del formulario no deben estar vacios.")
    }
}