

function copy(){
    let copy = document.getElementById('alert')

    navigator.clipboard.writeText("Rodrik#4944")
        .then(() => {
        console.log("Text copied to clipboard..."); 
    })
    copy.classList.remove('hiden');
    setTimeout(hide, 1000*1.5);
}
function hide(){
    let copy = document.getElementById('alert')

    copy.classList.add('hiden')
}
function indicacoes() {
    let indicacoes = document.getElementById('indicacoes')
 
    indicacoes.classList.remove('hiden')
    indicacoes.classList.add('infos')
}
function close1() {
    let indicacoes = document.getElementById('indicacoes')

    indicacoes.classList.remove('infos')
    indicacoes.classList.add('hiden') 
}

let audio = document.getElementById('nico')
let nicolau = document.getElementById('nicolau')

function nico() {
    audio.load()
    audio.play()
    setTimeout(img, 1800)
    setTimeout(stop, 8350)
}
function img() {
    nicolau.classList.remove('hiden')
}
function stop() {
    nicolau.classList.add('hiden')
    audio.pause()
}

function kat() {
    let kat = document.getElementById('kat')
 
    kat.classList.remove('hiden')
    kat.classList.add('infos')
}
function close2() {
    let kat = document.getElementById('kat')

    kat.classList.remove('infos')
    kat.classList.add('hiden') 
}