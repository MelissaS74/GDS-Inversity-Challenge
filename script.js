// Function to save preferences to local storage
function savePreferences() {
    const contrast = document.getElementById('contrast').value;
    const textSize = document.getElementById('text-size').value;
    const language = document.getElementById('language').value;

    localStorage.setItem('contrast', contrast);
    localStorage.setItem('textSize', textSize);
    localStorage.setItem('language', language);

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('phone').value; // Ensure the ID matches your HTML

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('contact', contact);

    // Trigger any immediate changes needed on the page based on preferences
    applyPreferences();
}

function loadPreferences() {
    const contrast = localStorage.getItem('contrast');
    const textSize = localStorage.getItem('textSize');
    const language = localStorage.getItem('language');

    // Check if the 'contrast' element exists before trying to set its value
    if (contrast && document.getElementById('contrast')) {
        document.getElementById('contrast').value = contrast;
    }

    // Check if the 'text-size' element exists before trying to set its value
    if (textSize && document.getElementById('text-size')) {
        document.getElementById('text-size').value = textSize;
    }

    // Check if the 'language' element exists before trying to set its value
    if (language && document.getElementById('language')) {
        document.getElementById('language').value = language;
    }

    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const contact = localStorage.getItem('contact');

    if (name) document.getElementById('name').value = name;
    if (email) document.getElementById('email').value = email;
    if (contact) document.getElementById('phone').value = contact; // Ensure the ID matches your HTML

    applyPreferences();
}

// Function to apply preferences
function applyPreferences() {
    const contrast = localStorage.getItem('contrast') || 'default'; // Default contrast if not set
    const textSize = localStorage.getItem('textSize');
    const language = localStorage.getItem('language');

    switch (contrast) {
        case 'high':
            document.body.style.backgroundColor = '#000000';
            document.body.style.color = '#FFF';
            break;
        case 'low':
            document.body.style.backgroundColor = '#FFF';
            document.body.style.color = '#000';
            break;
        case 'default':
            document.body.style.backgroundColor = '#fdc044'; // Adjusted to your specific color
            document.body.style.color = '#000';
            break;
        default:
            document.body.style.backgroundColor = '#fdc044'; 
            document.body.style.color = '#000';
            break;
    }

    switch (textSize) {
        case 'large':
            document.body.style.fontSize = '25px'; // Example size, adjust as necessary
            break;
        case 'extra-large':
            document.body.style.fontSize = 'px'; // Example size, adjust as necessary
            break;
        default:
            // Reset to CSS default or a base size
            document.body.style.fontSize = ''; 
            break;
    }
}

if (document.getElementById('contrast')) {
    document.getElementById('contrast').addEventListener('change', savePreferences);
}
if (document.getElementById('text-size')) {
    document.getElementById('text-size').addEventListener('change', savePreferences);
}
if (document.getElementById('language')) {
    document.getElementById('language').addEventListener('change', savePreferences);
}

document.addEventListener('DOMContentLoaded', function() {
    // Only add the event listener if the 'preferences-form' exists on the page
    var preferencesForm = document.getElementById('preferences-form');
    if (preferencesForm) {
        preferencesForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior
            savePreferences(); // Call your function to save preferences
        });
    }

    loadPreferences(); // Load preferences when the page loads
});

