function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date
    var minutos = new Date

    var hora = data.getHours() 
    var min = minutos.getMinutes()

    msg.innerHTML = `São exatamente ${hora} horas e ${min} minutos.`
    if (hora >= 6 && hora <= 12) {
        // BOM DIA!
        imagem.src = "imagens/manha.png"
       document.body.style.background = '#8BB4D9'
    } else if (hora >= 13 &&  hora <= 18) {
        // BOA TARDE!
        imagem.src = "imagens/tarde.png"
        document.body.style.background = '#F2BE5C'
    } else if (hora >= 19 && hora <= 23) {
        // BOA NOITE!
        imagem.src = "imagens/noite.png"
        document.body.style.background = '#152840'
    } if (hora >= 0 && hora <= 5 ) {
        // BOA MADRUGADA!
        imagem.src = "imagens/madrugada.png"
        document.body.style.background = '#202426'
    }    
}