function logar(){
    alert ("APERTOUUU")
    var usuario = document.getElementById("inputUsuario").value
    var senha = document.getElementById("inputSenha").value

    if ((usuario =="admin" || usuario == "admin@1234.com") && senha == "1234") {
        window.location.href = "home.html"
    } else {
        alert ("usuario/senha incorretos! Tente novamente!")
    }

}