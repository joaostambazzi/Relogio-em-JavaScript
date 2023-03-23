function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minuts = data.getMinutes()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas e ${minuts} minutos.`
    
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = "Manhã.jpg"
        document.body.style.backgroundColor = "#56bacc"
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = "tarde.png"
        document.body.style.backgroundColor = "#b1a74d"
    }else {
        // Boa noite
        img.src = "noite.jpg"
        document.body.style.backgroundColor = "#1a2450"
    }
}