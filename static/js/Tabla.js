miStorage=window.localStorage
listaresul=[]
const Guardar=()=>{
    alert("Solicitud Enviada")
    var nombre = document.getElementById("form6Example1").value;
    var apelld = document.getElementById("form6Example2").value;
    var correo=document.getElementById("form6Example5").value;
    var telefono=document.getElementById("form6Example6").value;
    var quejas=document.getElementById("form6Example7").value;
    let informa={
        nomb:nombre,
        apell:apelld,
        corr:correo,
        telef:telefono,
        quejas:quejas,
    }
    listaresul.push(informa)
    miStorage.removeItem("Tabla de falla")
    miStorage.setItem("Tabla de falla",JSON.stringify(listaresul))
    let tablaref=document.getElementById("tabla")
    let newtablarow =tablaref.insertRow(-1)
    let newtablarefcell= newtablarow.insertCell(0)
    newtablarefcell.textContent=nombre
    newtablarefcell= newtablarow.insertCell(1)
    newtablarefcell.textContent=apelld
    newtablarefcell= newtablarow.insertCell(2)
    newtablarefcell.textContent=correo
    newtablarefcell= newtablarow.insertCell(3)
    newtablarefcell.textContent=telefono
    newtablarefcell= newtablarow.insertCell(4)
    newtablarefcell.textContent=quejas

    
   
    deletoption.addEventListener("click",(event)=>{
        console.log(event)
        event.target.parentNode.parentNode.remove()
    })

    alert("Solicitud Enviada")
    
}



