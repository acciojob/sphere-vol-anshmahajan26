function volume_sphere() {
   event.preventDefault();

  // get radius value
  let radius = document.getElementById("radius").value;
  radius = Number(radius);

  let volume;

  // validate input
  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4); // round to 4 decimals
  }

  // show result
  document.getElementById("volume").value = volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
