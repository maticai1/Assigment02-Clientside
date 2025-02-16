// Constants for query selectors
const studentIdDisplay = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imageDisplay = document.getElementById("images");

// Array of image file names
const imageFiles = ["Animal.jpg", "Flowers.jpg", "Forest.jpg", "Mountains.jpg", "Tree.jpg"];

// Function to change background color and display student ID
function changeCustomColor() {
    const number = parseInt(customNumberInput.value);
    studentIdDisplay.textContent = "Student ID: 1277165"; 
    document.body.style.backgroundColor = getColorFromNumber(number);
}

// Function to change background color based on random number
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNum;
    changeCustomColor();
}

// Function to get color from number range
function getColorFromNumber(num) {
    if (num < 0 || num > 100) return "red";
    if (num <= 20) return "green";
    if (num <= 40) return "blue";
    if (num <= 60) return "orange";
    if (num <= 80) return "purple";
    return "yellow";
}

// Function to populate the select list with image options
function addList() {
    if (imageSelect.children.length > 1) return; // Prevents duplicates
    
    imageFiles.forEach(image => {
        const option = document.createElement("option");
        option.value = image;
        option.textContent = image;
        imageSelect.appendChild(option);
    });
}

// Function to change the displayed image and background
function changeImage() {
    const selectedImage = imageSelect.value;
    if (selectedImage) {
        imageDisplay.src = `img/${selectedImage}`;  
        imageDisplay.alt = selectedImage;
        
        // Cambiar fondo con la imagen seleccionada
        document.body.style.backgroundImage = `url('img/${selectedImage}')`;
        document.body.style.backgroundSize = "cover";  
        document.body.style.backgroundPosition = "center";  
        document.body.style.backgroundRepeat = "no-repeat";
    }
}

// Event listeners
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("click", addList);  
imageSelect.addEventListener("change", changeImage);
