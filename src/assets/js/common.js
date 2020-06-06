resizeFontSize();

window.addEventListener('resize', resizeFontSize, false);

document.documentElement.addEventListener('touchmove', function (e) {
  if (e.touches && e.touches.length > 1) {
    e.preventDefault();
  }
}, false)

function resizeFontSize () {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 37.5 + 'px';
}