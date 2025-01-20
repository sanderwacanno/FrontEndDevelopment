// JavaScript Document
console.log("hi");


// Hamburger menu
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

// Nacht modus
let isNachtModusAan = false;

function toggleNachtModus() {
    if (isNachtModusAan) {
        document.documentElement.style.setProperty("--nedgame-blue", "#003552")
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
        document.documentElement.style.setProperty("--nedgame-blue", "#00669B")
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

// Favorieten toevoegen
const heartButton = document.querySelector('main > section:nth-of-type(3) > ul:first-of-type > li:first-of-type > button:first-of-type')
const heartSVG = document.querySelector('main > section:nth-of-type(3) > ul:first-of-type > li:first-of-type > button:first-of-type > svg')

heartButton.onclick = () => {
    // heartState = !heartState
    // console.log(heartState)
    updateHeart()
}

const updateHeart = () => {
    if(heartSVG.classList.contains('favorited')){
        heartSVG.classList.remove('favorited')
        heartSVG.classList.add('unfavorited')
    }
    else {
        heartSVG.classList.add('favorited')
        heartSVG.classList.remove('unfavorited')
    }
}

const plusButton = document.querySelector('main > section:nth-of-type(3) > ul:first-of-type > li:first-of-type > button:nth-of-type(2)')
const plusSVG = document.querySelector('main > section:nth-of-type(3) > ul:first-of-type > li:first-of-type > button:nth-of-type(2) > svg')

plusButton.onclick = console.log("hi")

plusButton.onclick = () => {
    // heartState = !heartState
    // console.log(heartState)
    updatePlus()
}

const updatePlus = () => {
    if(plusSVG.classList.contains('inwinkelmand')){
        plusSVG.classList.remove('inwinkelmand')
        plusSVG.classList.add('uitwinkelmand')
    }
    else {
        plusSVG.classList.add('inwinkelmand')
        plusSVG.classList.remove('uitwinkelmand')
    }
}
