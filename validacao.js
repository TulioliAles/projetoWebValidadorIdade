function calcular(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var nasc = document.getElementById('txtano')
    var msg = document.getElementById('res')
   
    if(nasc.value.length == 0 || Number(nasc.value > ano)){
        alert('ERRO - Ano inválido ou faltando!')
    } else{
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'fotocrianca-m.png')
            }else if(idade < 21){
                img.setAttribute('src', 'fotojovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src', 'fotoadulto-m.png')
            }else{
                img.setAttribute('src', 'fotoidoso-m.png')
            }
        } else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'fotocrianca-f.png')
            }else if(idade < 21){
                img.setAttribute('src', 'fotojovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src', 'fotoadulto-f.png')
            }else{
                img.setAttribute('src', 'fotoidoso-f.png')
            }
        }    
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        msg.appendChild(img)
    }

}