// JavaScript Document
console.log("hi");

function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

const menuButton = document.querySelector("#openButton")

menuButton.onclick = toonMenu

function toonMenu() {
    const nav = document.querySelector("#menu")
    nav.classList.add("toonMenu")
}

const closeButton = document.querySelector("#closeButton")

closeButton.onclick = sluitMenu

function sluitMenu (){
    const nav = document.querySelector("#menu")
    nav.classList.remove("toonMenu")
}