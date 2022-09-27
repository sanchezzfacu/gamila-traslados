const form = document.querySelector('#form')

const name = document.querySelector('#name')
const phoneNumber = document.querySelector('#phone-number')
const service = document.querySelector('#service')
const passengers = document.querySelector('#passengers')
const date = document.querySelector('#date')

name.addEventListener('change', validateForm)
phoneNumber.addEventListener('change', validateForm)
service.addEventListener('change', validateForm)
passengers.addEventListener('change', validateForm)
date.addEventListener('change', validateForm)

const formBoilerplate = {
    name: '',
    phone: '',
    service: '',
    passengers: '',
    date: ''
}

const errors = {}

function validateForm(e) {
    let entryValue = e.target.value
    let inputName = e.target.id

    formBoilerplate.inputName += entryValue
 
    if(e.target.id === 'name' && formBoilerplate.name.length > 3) {
        errors.name = 'Ingrese un nombre válido'
    }
}
