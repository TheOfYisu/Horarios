var user,pass
const Oper= ( )=>{
    user = document.getElementById("form2Example1").value;
    pass = document.getElementById("form2Example2").value;
    localStorage.setItem("users", user);
    localStorage.setItem("passe",pass)
    User_passstora=window.localStorage
    entro=null
    fetch("http://127.0.0.1:5000/getcredenciales")
        .then(response=>response.json())
        .then(datos=>{
            var cont=datos.length
            for(i=0;i<cont;i++){
                if(datos[i].usuario==user){
                    if(datos[i].password==pass){
                        if(datos[i].tipodeusuario=="Admin"){
                            localStorage.setItem("ide_personal",datos[i].ide_personal)
                            window.location.href = "../html/personal-a.html"
                            entro=true
                        }else{
                            if(datos[i].tipodeusuario=="Jefe"){
                                localStorage.setItem("ide_personal",datos[i].ide_personal)
                                window.location.href = "../html/pesonal-j.html"
                                entro=true
                            }else{
                                if(datos[i].tipodeusuario=="Empleado"){
                                    localStorage.setItem("ide_personal",datos[i].ide_personal)
                                    window.location.href = "../html/personal-e.html"
                                    entro=true
                                }
                            }
                        }
                    }
                }
            }
            if(entro!=true){
                alert("Credenciales Incorrectos")
            }
        })
}






