const Oper2= ( )=>{
    var confir=confirm("Esta seguro que quiere cerrar sesión")
    if(confir==true){
        window.location.href = "../index.html"
        localStorage.clear()
    }
}
const Oper3= ( )=>{
    miStorage=window.localStorage
    listaresul=[]
    alert("Solicitud Enviada")
    var solit = document.getElementById("solit").value;
    var nombre = document.getElementById("form6Example1").value;
    var apelld=document.getElementById("form6Example2").value
    var correo=document.getElementById("form6Example5").value;
    var telefono=document.getElementById("form6Example6").value;
    var fenacimi=document.getElementById("form6Example7").value;
    let informa={
        solit1:solit,
        nomb:nombre,
        apell:apelld,
        corr:correo,
        telef:telefono,
        fecnaci:fenacimi
    }
    listaresul.push(informa)
    miStorage.removeItem("Informacion de usuarios")
    miStorage.setItem("Informacion de usuarios",JSON.stringify(listaresul))
    let tablaref=document.getElementById("usuarios")
    let newtablarow =tablaref.insertRow(-1)
    let newtablarefcell= newtablarow.insertCell(0)
    newtablarefcell.textContent=solit
    newtablarefcell= newtablarow.insertCell(1)
    newtablarefcell.textContent=nombre
    newtablarefcell= newtablarow.insertCell(2)
    newtablarefcell.textContent=apelld
    newtablarefcell= newtablarow.insertCell(3)
    newtablarefcell.textContent=correo
    newtablarefcell= newtablarow.insertCell(4)
    newtablarefcell.textContent=telefono
    newtablarefcell= newtablarow.insertCell(5)
    newtablarefcell.textContent=fenacimi
    let newdeletoption=newtablarow.insertCell(6)
    let deletoption=document.createElement("button")
    deletoption.textContent="Eliminar"
    newdeletoption.appendChild(deletoption)

    deletoption.addEventListener("click",(event)=>{
        event.target.parentNode.parentNode.remove()
    })
}