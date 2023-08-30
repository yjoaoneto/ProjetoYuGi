//Carrossel
const imgs = document.getElementById("img")
const img  = document.querySelectorAll("#img img")

let idx = 0

function carrosel(){
    idx++
    if(idx > img.length - 1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 700}px)`
}

setInterval(carrosel, 1800)


// Puxando os dados da API
fetch('https://ygo.augustomedeiros.com.br/getCarta/35').then(r =>{
    return r.json()
}).then(corpo =>{
    const url = corpo.urlImagem
    console.log(url)

    document.getElementById('nome').innerHTML = corpo.nome
    document.getElementById('nivel').innerHTML = corpo.nivel
    document.getElementById('desc').innerHTML = corpo.descricao
    document.getElementById('atk').innerHTML = corpo.pontosAtk
    document.getElementById('def').innerHTML = corpo.pontosDfs
    document.getElementById('imgCard').innerHTML = `<img src=${corpo.urlImagem} alt="Carta Yu-Gi-Oh">`
})