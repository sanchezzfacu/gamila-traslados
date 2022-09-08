
gsap.fromTo('.phrase-container', 0.7, {
    x: 550,
    ease: Power2.easeOut,
    opacity: 0
}, {    
    x: 0,
    ease: Power2.easeOut,
    opacity: 1
});

gsap.fromTo('.service-slider', 1, {
    x: 550,
    ease: Power2.easeOut,
    opacity: 0
}, {    
    x: 0,
    ease: Power2.easeOut,
    opacity: 1
});

gsap.fromTo('.info-img button', 1.3, {
    x: 550,
    ease: Power2.easeOut,
    opacity: 0
}, {    
    x: 0,
    ease: Power2.easeOut,
    opacity: 1
});

gsap.from('.about-text', 1, {
    x: -100,
    ease: Power2.easeOut,
    opacity: 0
})


let tlService = gsap.timeline({
    scrollTrigger: {
        trigger: '.services-container',
        start: 'top center'
    },

})
tlService.fromTo('.service', 1, {
    y: 600,
    opacity: 1,
    ease: Power2.easeOut
}, {
    y: 0, 
    opacity: 1,
    ease: Power2.easeOut
    
})



let tlClients = gsap.timeline({
    scrollTrigger : {
        trigger: '.company',
        start: 'top bottom'
    },
})
tlClients.fromTo('.company', 1.5, {
    y: 200,
    ease: Power2.easeOut
}, {
    y: 0,
    ease: Power2.easeOut
})



let tlForm = gsap.timeline({
    scrollTrigger: {
        trigger: '.form-container',
        start: 'top center'
    }
})
tlForm.from('.form-info', 1 , {
    x: -700,
    ease: Power2.easeOut
})
tlForm.from('form', 1,{
    x: 700,
    ease: Power2.easeOut
}, '-=1')

