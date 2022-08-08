var slider = tns({
    container: '.services-slider',
    'slideBy': 1,
    'speed' : 400,
    'nav': false,
    'items': 1.20,
    'autoplay': true,
    'controlsPosition': 'bottom',
    'controlsText': ['<', '>'],
    'autoplayTimeout' : 3000,
    'autoplayHoverPause': true,
    autoplayButtonOutput: false,
    responsive: {
        660: {
            'items': 1.5
        },
        900: {
            'items': 2.25
        },
        1102: {
            'items': 3,
        }
    },
})