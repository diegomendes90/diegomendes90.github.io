function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = '_imagens/manha.jpg'
        document.body.style.background = 'white'
        document.body.style.color = 'pink'       
        
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = '_imagens/tarde.jpg'
        document.body.style.background = 'orange'
    } else {
        //boa noite
        img.src = '_imagens/noite.jpg'
        document.body.style.background = 'black'
    }
}
