/*------------------------------------------------
-- FREDERICO ALVES --
--------------------------------------------------
-- BLACK LEMON --
--------------------------------------------------*/

document.getElementById("confetti-animation").addEventListener('click', function(){

    // do this for 1 second
    var duration = 1 * 1000;
    var end = Date.now() + duration;

    (function frame() {
    confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
    });

    // keep going until we are out of time
    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }());


    // check mark animation
    document.documentElement.classList.toggle('checked-out'), setTimeout(function() {
        document.documentElement.classList.toggle('checked-out');
    }
    , 3000);


});

