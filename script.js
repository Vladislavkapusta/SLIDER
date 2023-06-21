
const slider = document.querySelector('.slider');
const thumb = slider.querySelector('.slider-thumb');
const value = slider.querySelector('.slider-value');


const min = 0;
const max = 100;

updateSliderValue(getThumbPercent());


function updateSliderValue(percent) {
  const range = max - min;
  const valueText = Math.round(min + percent * range);
  value.innerText = valueText;
}


function getThumbPercent() {
  return (parseFloat(thumb.style.left) / (slider.offsetWidth - thumb.offsetWidth));
}


thumb.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(event) {
  const sliderRect = slider.getBoundingClientRect();
  let left = event.clientX - sliderRect.left - thumb.offsetWidth / 2;
  if (left < 0) {
    left = 0;
  } else if (left > slider.offsetWidth - thumb.offsetWidth) {
    left = slider.offsetWidth - thumb.offsetWidth;
  }
  thumb.style.left = `${left}px`;
  updateSliderValue(getThumbPercent());
}

function onMouseUp() {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}