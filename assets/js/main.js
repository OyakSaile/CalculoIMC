let formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', function (e) {
e.preventDefault()

const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')
const peso = Number(inputPeso.value)
const altura = Number(inputAltura.value)

if(!peso){
    setMessage(`Peso Inválido`, false)
    return
}
if(!altura){
    setMessage(`Altura Inválida`, false)
    return
        
}

const imc = getIMC(peso,altura)
const calculoIMC = nivelIMC(imc)

const msg = `Seu IMC é ${imc} (${calculoIMC}).`

setMessage(msg,true)

})

function getIMC(peso,altura) {
    const imc = peso / altura **2
    return imc.toFixed(2)
}

function nivelIMC(imc) {
    if(imc >= 39.9){
        return 'Obesidade Grau 3'
    }
    if(imc>= 34.9 ){
        return 'Obesidade Grau 2'
    }
    if (imc >= 29.9){
        return 'Obesidade Grau1'
    }
    if(imc >= 24.9){
        return  'Sobrepeso'
    }
    if(imc >= 18.5){
        return 'Peso Normal'
    }
    if (imc < 18.5){
        return 'Abaixo do Peso'
    }
}

function criaP(){
    const p = document.createElement('p')
    return p 
}


function setMessage(msg,valido){
   let resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p = criaP()
    
    if(valido){
        p.classList.add('valid')
    }else{
        p.classList.add('invalid')
    }
          
    p.innerHTML = msg
    resultado.appendChild(p)

}