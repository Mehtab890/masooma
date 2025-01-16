// Function to reveal the poem when the button is clicked
document.getElementById('revealBtn').addEventListener('click', function() {
    const poem = document.getElementById('poem');
    
    // Show the poem with a fade-in effect
    poem.classList.add('fade-in');
    poem.style.display = 'block';

    // Change the button text to something more romantic
    this.textContent = "You're a gem for me , Massoma!";
    this.disabled = true;
});
