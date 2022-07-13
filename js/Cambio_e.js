var NombreE,ApellidoE,CorreoE,CargoE,CelularE,CedulaE
function validar2(vali){
    if (vali==true){
        setTimeout('document.location.reload()',1500)
    }
}
id = localStorage.getItem("ide_personal")
axios.get('http://127.0.0.1:5000/getpersonal/' + id)
.then(function (response) {
    datos=response.data[0]
    NombreE=document.getElementById('nombreS').value = datos.name;
    ApellidoE=document.getElementById('apellidoS').value = datos.lastname;
    CorreoE=document.getElementById('emailS').value = datos.correo;
    CelularE=document.getElementById('cellS').value = datos.telefono;
    CedulaE=document.getElementById('num_identi').value = datos.num_ident;
})
.catch(function (error) {
    console.log(error);
});
const EnviarEE= ( )=>{
    var validar=false
    var solicitudE=document.getElementById("solicitudE").value
    if(NombreE!=""){
        validar=true
    }else{
        validar=false
    }
    if(validar==true){
        if(ApellidoE!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(CorreoE!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(CelularE!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(CedulaE!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(solicitudE!=""){
            validar=true
        }else{
            validar=false
        }
    }
    destina=document.getElementById("solit").value
    if (validar==true){
        var envicorreo
        if(destina=="adminsoli"){
            envicorreo={
                asunto:"Cambio de informacion personal",
                destina:"bjfernandez@itsa.edu.co",
                nombreEF:NombreE,
                apellidoEF:ApellidoE,
                correoEF:CorreoE,
                telefonoEF:CelularE,
                CedulaEF:CedulaE,
                solicitudesEF:solicitudE
            }
        }else if(destina=="jefesoli"){
            envicorreo={
                asunto:"Cambio de informacion personal",
                destina:"bjfernandez@itsa.edu.co",
                nombreEF:NombreE,
                apellidoEF:ApellidoE,
                correoEF:CorreoE,
                telefonoEF:CelularE,
                CedulaEF:CedulaE,
                solicitudesEF:solicitudE
            }
        }
        axios ({
            method: 'POST',
            url: 'http://localhost:1000/envio5',
            data: envicorreo,
        }).then(vali=confirm("Se a enviado su \nSolicitud."),validar2(vali))
        .catch(err => console.log('Error: ', err),)
    }else{
        alert("Error, los campos del formulario no deben estar vacios.")
    }
    
}

