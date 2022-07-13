
var validar=false
var DepartamentoC
id = localStorage.getItem("ide_personal")
DepartamentoC = localStorage.getItem("cargo")
id = localStorage.getItem("ide_personal")
axios.get('http://127.0.0.1:5000/getpersonal/' + id)
.then(function (response) {
    datos=response.data[0];
    document.getElementById('CargoC').value = datos.cargo;
})
.catch(function (error) {
    console.log(error);
});
window.addEventListener('load', function(){
    if(DepartamentoC="Urgencias"){
        document.getElementById('Cargo1').style.display = 'block';
    }else if(DepartamentoC="Cirujía"){
        document.getElementById('Cargo3').style.display = 'block';
    }else{
        document.getElementById('Cargo2').style.display = 'block';
    }
})
function validar2(vali){
    if (vali==true){
        setTimeout('document.location.reload()',1500)
    }
}
const EnviarJ= ( )=>{
    var vali1=false     
    var nombre=document.getElementById("NombresJ").value
    var apellido=document.getElementById("ApellidosJ").value
    var Cedula=document.getElementById("CedulaJ").value
    var correo=document.getElementById("EmailJ").value
    var telefono=document.getElementById("TelefonoJ").value
    var genero=document.getElementById("GeneroJ").value
    var Hmes=document.getElementById("horas_mesJ").value
    var Dmes=document.getElementById("horas_diasJ").value
    var Trunos=document.getElementById("tunoJ").value
    var politicas1=document.getElementById("politica").checked
    if(DepartamentoC="Urgencias"){
        var cargo=document.getElementById("genempeladocargourgencias").value
    }else if(DepartamentoC="Cirujía"){
        var cargo=document.getElementById("genempeladocargocirujia").value
    }else{
        var cargo=document.getElementById("genempeladocargoginecologia").value
    }

    console.log()
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
        if(Cedula!=""){
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
    if(validar==true){
        if(genero!=""){
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
    if(validar==true){
        if(Hmes!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(Dmes!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(Trunos!=""){
            validar=true
        }else{
            validar=false
        }
    }
    if(validar==true){
        if(politicas1!=true){
            vali1=true
        }else{
            vali1=false
        }
    }
    if (validar==true && vali1==false){
        const envicorreo={
            asunto:"Ingreso Nuevo empleado",
            destina:"bjfernandez@itsa.edu.co",
            nombreJ:nombre,
            apellidoJ:apellido,
            emailj:correo,
            cellJ:telefono,
            CedulaJ:Cedula,
            generoJ:genero,
            cargoJ:cargo,
            HmesJ:Hmes,
            DmesJ:Dmes,
            TrunosJ:Trunos,
            dep:DepartamentoC
        }
        axios ({
            method: 'POST',
            url: 'http://localhost:1000/envio2',
            data: envicorreo,
        }).then(vali=confirm("Se a enviado su \nSolicitud."),validar2(vali))
        .catch(err => console.log('Error: ', err),)
    }else{
        if (vali1==true){
            alert("Por favor acepte los terminos y condiciones")  
        }else{
            alert("Error, los campos del formulario no deben estar vacios.")
            
        }
    }
}