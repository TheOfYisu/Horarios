let user=localStorage.getItem("users")
let pass=localStorage.getItem("passe")
if (user==null || pass==null){
    window.location.href = "../index.html"
}