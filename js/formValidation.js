const form = document.querySelector('#form')
const submitBtn = document.querySelector('.submit-btn')

const name = document.querySelector('#name')
const phoneNumber = document.querySelector('#phone-number')
const service = document.querySelector('#service')
const passengers = document.querySelector('#passengers')
const date = document.querySelector('#date')

const passengersLabel = document.querySelector('.passengers-label')
const phoneNumberLabel = document.querySelector('.phone-number-label')

name.addEventListener('change', validateForm)
phoneNumber.addEventListener('change', validateForm)
service.addEventListener('change', validateForm)
passengers.addEventListener('change', validateForm)
date.addEventListener('change', validateForm)

submitBtn.addEventListener('click', loadingSubmit)

const formBoilerplate = {
    name: '',
    phoneNumber: '',
    service: '',
    passengers: '',
    date: ''
}

const errors = {}
let totalErrors = 0
let formDefaultState = false

function validateForm(e) {
    // const event = e.target
    // let entryValue = event.value
    // let inputId = event.id

    // formBoilerplate[inputId] += entryValue

    // if(inputId === 'name' && formBoilerplate.name.length < 3) {
    //     errors.name = 'Ingrese un nombre válido'
    //     totalErrors++
    //     console.log(errors.name)
    // }

    // if(inputId === 'phone-number' && formBoilerplate.phoneNumber.length > 5 ) {
    //     errors.phoneNumber = 'Ingrese un número válido'
    //     totalErrors++
    //     let span = document.createElement('span')
    //     span.textContent = errors.phoneNumber
    //     phoneNumberLabel.append(span)
    //     console.log(errors.phoneNumber)
    // }
    
    // // if(inputId === 'service' && !formBoilerplate.service.length) {
    // //     errors.service = 'Seleccione algún servicio'
    // //     console.log(errors.service)
    // // }

    // if(inputId === 'passengers' && formBoilerplate.passengers < 0) {
    //     errors.passengers = 'Ingrese un número válido'
    //     totalErrors++
    //     let span = document.createElement('span')
    //     span.textContent = errors.passengers
    //     passengersLabel.append(span)
    // }
    // totalErrors === 0 ? formDefaultState = false : ''
}

function loadingSubmit() {
    if(!formDefaultState) {
        submitBtn.style.background = '#ce5d79'
        submitBtn.textContent = 'Enviando...'
    } 
}
