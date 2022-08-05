function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res')
    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        //res.innerHTML = `Idade calculada: ${idade}` 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <14){
                //criança
                img.setAttribute('src','menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovemH.jpg')
            } else if (idade < 55){
                //adulto
                img.setAttribute('src','homem.jpg')
            } else {
                //idoso
                img.setAttribute('src','idoso.jpg')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <14){
                //criança
                img.setAttribute('src','menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovemM.jpg')
            } else if (idade < 55){
                //adulto
                img.setAttribute('src','mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src','idosa.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
