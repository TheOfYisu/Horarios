var user,pass
const Oper= ( )=>{
    user = document.getElementById("form2Example1").value;
    pass = document.getElementById("form2Example2").value;
    localStorage.setItem("users", user);
    localStorage.setItem("passe",pass)
    User_passstora=window.localStorage
    entro=null
    fetch("https://theofyisu.github.io/Proyecto/json/login.json")
        .then(response=>response.json())
        .then(datos=>{
            for(i=0;i<3;i++){
                if(datos[i].usuario==user){
                    if(datos[i].contraseña==pass){
                        if(datos[i].Tipo_de_usuario=="Admin"){
                            window.location.href = "../html/personal-a.html"
                            entro=true
                        }else{
                            if(datos[i].Tipo_de_usuario=="Jefe"){
                                window.location.href = "../html/pesonal-j.html"
                                entro=true
                            }else{
                                window.location.href = "../html/personal-e.html"
                                entro=true
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






