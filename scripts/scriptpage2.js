// Merch page lijst toggle
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



