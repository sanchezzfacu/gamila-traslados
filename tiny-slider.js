var slider = tns({
    container: '.services-slider',
    'slideBy': 1,
    'speed' : 400,
    'nav': true,
    'items': 1.20,
    'autoplay': true,
    'navPosition': 'bottom',
    'autoplayTimeout' : 4000,
    'autoplayHoverPause': false,
    autoplayButtonOutput: false,
    lazyload: false,
    arrowKeys: false,
    loop: true,
    responsive: {
        660: {
            'items': 1.20
        },
        900: {
            'items': 2.25
        },
        1102: {
            'items': 3,
        }
    },
})