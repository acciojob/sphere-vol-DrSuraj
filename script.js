function volume_sphere() {
    //Write your code here
  // Get the radius value from the input field
    const radius = parseFloat(document.getElementById('radius').value);

    // Check if the entered value is a valid number
    if (isNaN(radius)) {
        alert('Please enter a valid number for the radius.');
        return false; // Prevent form submission
    }

    // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Update the volume input field with the calculated volume
    document.getElementById('volume').value = volume.toFixed(2);

    // Prevent form submission
    return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
