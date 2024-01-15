function volume_sphere() {
  // Get the radius value from the form
  const radius = parseFloat(document.getElementById('radius').value);

  // Check if the radius is a valid number
  if (isNaN(radius) || radius <= 0) {
    alert("Please enter a valid positive number for the radius.");
    return;
  }

  // Calculate the volume of the sphere (V = (4/3) * π * r^3)
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the calculated volume in the volume field
  document.getElementById('volume').value = volume.toFixed(2);
}
