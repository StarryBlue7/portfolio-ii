// Load particles and configuration from particles.json
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// Sticky navbar behavior
const offset = $('#navbar').offset();

window.onscroll = function() {
    if (window.pageYOffset >= offset.top) {
        $('#navbar').addClass('sticky-nav');
    } else {
        $('#navbar').removeClass('sticky-nav');
    }
}