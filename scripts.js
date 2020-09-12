const price = 1000
const colorPrise = 500
let checkbox = document.getElementById('isColor')

const getResult = () => {
    let resultElem = document.getElementById('result')
    let parent = document.querySelector("form")
    if (resultElem !== null) {
        resultElem.remove()
    }
    let area = document.getElementById('area').value
    let sum = checkbox.checked ? area * price + area * colorPrise : area * price
    let elem = document.createElement('div')
    elem.className = 'result'
    elem.id = 'result'
    let elemText = document.createTextNode(`Стоимость ${sum.toString()}₽`)
    elem.appendChild(elemText)
    parent.appendChild(elem)
}

btn.onclick = () => {
    getResult()
}
