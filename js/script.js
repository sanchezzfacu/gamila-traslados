const serviceSelect = document.querySelector('.service-type')
const obraSocialSelect = document.querySelector('.obra-social-select')

obraSocialSelect.style.display = 'none'

serviceSelect.addEventListener('change', handleServiceSelect)

function handleServiceSelect(e) {
    if(e.target.value === 'Persona con discapacidad') {
        obraSocialSelect.style.display = 'block'
    } else {
        obraSocialSelect.style.display = 'none'
    }
}
