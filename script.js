function showImage() {
    // Get the selected value from the dropdown
    var selectedOption = document.getElementById("dropdown").value;

    // Get the image element
    var imageElement = document.getElementById("imageToShow");

    // Update the image source based on the selected option
    imageElement.src = selectedOption;
}

