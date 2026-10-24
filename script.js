let halo = document.getElementById('halo')
halo.addEventListener("mouseenter", () =>{
    halo.style.color = "yellow"},

halo.addEventListener("mouseleave", () =>{
    halo.style.color="black"

    
})
)
let lampu= document.getElementById('lampu')
let saklar = document.getElementById('saklar')
let menyala = false
saklar.addEventListener('click', () => {
    menyala = !menyala
    lampu.style.color = menyala ? "yellow" : "black"
})

let btn = document.getElementById('btn')
let tampil = document.getElementById('tampil')
btn.addEventListener('click', () => {
    tampil.innerHTML = "Hello World"
})
let boom = document.getElementById('boom')

