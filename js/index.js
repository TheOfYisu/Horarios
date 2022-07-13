localStorage.removeItem("users")
localStorage.removeItem("passe")
window.addEventListener('load', function(){
    var imagenes=[];
    imagenes[0]="img/covid19-1.png";
    imagenes[1]="img/covid19-2.png";
    imagenes[2]="img/covid19-3.png";
    imagenes[3]="img/covid19-4.png";
    imagenes[4]="img/covi-19_1.png";
    var i=0;
    function cambiar(){
        document.hola.src=imagenes[i];
        if(i<4){
            i++;
        }else{
            i=0;
        }
    }
    setInterval(cambiar,3000);
})