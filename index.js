const binInput = document.getElementById("binInput")
const btnInput = document.getElementById("converterButton")
const stts = document.getElementById("statusText")

function changeStts(hex, texto) {
    stts.style.color = "#"+hex
    stts.textContent = texto

    binInput.style.cursor = "default"
    btnInput.style.cursor = "default"
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function convertToBin(n) {
    dif = 1
    nInBase10 = 0

    for (let i = 0; i < n.length; i++) {

        binNumber = n[n.length - dif]
        
        expo = dif - 1
        nInBase10 += Math.pow(2, expo) * binNumber

        dif += 1

    }

    changeStts("000000", "Número convertido: "+nInBase10)
    
}

btnInput.onclick = function () {
    binInput.style.cursor = "wait"
    btnInput.style.cursor = "wait"

    val = binInput.value

    if (val == "") changeStts("e35259", "Nenhum valor foi inserido!") 
    else {    
        if (!isNumber(val)) changeStts("e35259", "Só são permitidos 0's e 1's. Letras e outros caracteres/números não são.")
        for (let i = 0; i < val.length; i++) {
            t = val[i]
            if (t != 0 && t != 1) {
                changeStts("e35259", "Um valor binário só possui 0's e 1's")
                break
            }
        }
    }

    convertToBin(val)
}