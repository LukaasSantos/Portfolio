// Background Gradient 
let granimInstance = new Granim({
    element: '#canvas-interactive',
    name: 'interactive-gradient',
    elToSetClassOn: '.canvas-interactive-wrapper',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    states : {
        "default-state": {
            gradients: [
                ['#ABFBFF','#9BE8D6'],
                ['#B8FFDA','#9BE8AB'],
                ['#B3FFAB','#ABFBFF']

                // ['#B3FFAB', '#12FFF7'],
                // ['#ADD100', '#7B920A'],
                // ['#ED8B16', '#fa5d45']
            ],
            transitionSpeed: 3000
        }
    }
});
