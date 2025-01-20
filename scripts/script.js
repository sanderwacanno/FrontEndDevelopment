// JavaScript Document
console.log("hi");

// function darkMode(){
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }

const menuButton = document.querySelector("header > section > section > button:first-of-type")

menuButton.onclick = toonMenu

function toonMenu() {
    const nav = document.querySelector("header > section > nav:first-of-type")
    nav.classList.add("toonMenu")
}

const closeButton = document.querySelector("header > section > nav:first-of-type > section > button:first-of-type")

closeButton.onclick = sluitMenu

function sluitMenu (){
    const nav = document.querySelector("header > section > nav:first-of-type")
    nav.classList.remove("toonMenu")
}

let isNachtModusAan = false;

function toggleNachtModus() {
    if (isNachtModusAan) {
        document.documentElement.style.setProperty("--color-background", "#151515")
        document.documentElement.style.setProperty("--color-text", "#EAEAEA")
        document.documentElement.style.setProperty("--scroll-bar", "#818181")
        document.documentElement.style.setProperty("--scroll-background", "#383838")
        document.documentElement.style.setProperty("--border-unhover", "#666666")
        document.documentElement.style.setProperty("--border-hover", "#EFEFEF")
        document.documentElement.style.setProperty("--header-button", "#EFEFEF")
        document.documentElement.style.setProperty("--link-color", "#99cde9")    
        document.documentElement.style.setProperty("--background-image", "url(../images/backgrounddark.png)")
        isNachtModusAan = false;
    }
    else {
        document.documentElement.style.setProperty("--color-background", "#ffffff")
        document.documentElement.style.setProperty("--color-text", "#333")
        document.documentElement.style.setProperty("--scroll-bar", "#ffffff")
        document.documentElement.style.setProperty("--scroll-background", "#d4d4d4")
        document.documentElement.style.setProperty("--border-unhover", "#EFEFEF")
        document.documentElement.style.setProperty("--border-hover", "#666666")
        document.documentElement.style.setProperty("--header-button", "#000000")
        document.documentElement.style.setProperty("--link-color", "#00669B")        
        document.documentElement.style.setProperty("--background-image", "url(../images/background.png)")
        isNachtModusAan = true;
    }
}

// let favoriteState = false

// const favorite = document.getElementById("heart")

// favorite.onclick = () => {
//     favoriteState = !favoriteState
//     console.log(favoriteState)
//     updateFavorite()
// }

// const updateFavorite = () => {
//     if (favoriteState == true) {
//         heart.style.backgroundColor = "#333"
//     }
//     else {
//         heart.style.backgroundColor = "green"
//     }
// }

var heartButtonClick = document.querySelector("button[aria-label='Favoriet item button']")

heartButtonClick.onclick = favorite;

function favorite() {
    heart.style.backgroundColor = "#333"
    heartButtonClick.classList.toggle()
}

let listState = false

const listToggle = document.querySelector('main > section > section > section > section:nth-of-type(2) > button')

const merchList1 = document.querySelector('main > section > section > ul:first-of-type')
const merchList2 = document.querySelector('main > section > section > ul:nth-of-type(2)')
const merchList1Button = document.querySelector('main > section > section > section > section:nth-of-type(2) > button > svg:nth-of-type(1)')
const merchList2Button = document.querySelector('main > section > section > section > section:nth-of-type(2) > button > svg:nth-of-type(2)')

listToggle.onclick = () => {
    listState = !listState
    console.log(listState)
    updateList()
}

const updateList = () => {
    if (listState == true) {
        merchList1.style.visibility = "hidden"
        merchList2.style.visibility = "visible"

        merchList1.style.display = "none"
        merchList2.style.display = "block"

        merchList1Button.style.visibility = "hidden"
        merchList2Button.style.visibility = "visible"

        merchList1Button.style.display = "none"
        merchList2Button.style.display = "block"
    }
    else {
        merchList1.style.visibility = "visible"
        merchList2.style.visibility = "hidden"

        merchList1.style.display = "grid"
        merchList2.style.display = "none"

        merchList1Button.style.visibility = "visible"
        merchList2Button.style.visibility = "hidden"

        merchList1Button.style.display = "block"
        merchList2Button.style.display = "none"
    }
}