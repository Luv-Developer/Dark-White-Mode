const dark = document.getElementById("dark")
const light = document.getElementById("light")
let x = "white"
const darkclick = () =>{
    if(x=="white"){
        document.body.style.backgroundColor = "black"
        document.getElementById("text").innerText = "black"
        document.getElementById("text").style.color = "white"
        x = "black"
    }
}
const whiteclick = () =>{
    if(x=="black"){
        document.body.style.backgroundColor = "white"
        document.getElementById("text").innerText = "white"
        document.getElementById("text").style.color = "black"
        x = "white"
    }
}