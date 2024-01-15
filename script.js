function volume_sphere(event) {
  event.preventDefault(); // Prevent form submission

  // Get the radius value from the input field
  const radius = parseFloat(document.getElementById('radius').value);

  if (!isNaN(radius) && radius >= 0) {
    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume in the volume input field
    document.getElementById('volume').value = volume.toFixed(2);
  } else {
    // If the input is not a valid number, display an error message
    alert('Please enter a valid positive number for the radius.');
  }
}

window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
