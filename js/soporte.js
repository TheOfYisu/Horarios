function validar2(vali){
    if (vali==true || vali==false){
        setTimeout('document.location.reload()',1500)
    }
}
const en_corr_soporte= ( )=>{
    var validar=false
    var nombre=document.getElementById("name").value
    var apellido=document.getElementById("lastname").value
    var correo=document.getElementById("email").value
    var telefono=document.getElementById("telephone").value
    var motivo=document.getElementById("motivo").value
    if(nombre!=""){
        validar=true
    }else{
        validar=false
    }
    if(validar==true){
        if(apellido!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(correo!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(telefono!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if (validar==true){
        const envicorreo={
            asunto:"Soporte y Ayuda",
            destina:"bjfernandez@itsa.edu.co",
            name:nombre,
            lastname:apellido,
            email:correo,
            telephone:telefono,
            motivo_e:motivo
        }
        axios ({
            method: 'POST',
            url: 'http://localhost:1000/envio',
            data: envicorreo,
        }).then(vali=confirm("Soprte y Ayuda \nEnviado."),validar2(vali))
        .catch(err => console.log('Error: ', err),)
    }else{
        alert("Error, los campos del formulario no deben estar vacios.")
    }
}