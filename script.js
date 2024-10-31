async function handleSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('cvForm');
    const data = new FormData(form);

    // Replace with your Formspree endpoint
    const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        alert("Thank you! Check your email for the CV download link.");
        form.reset();
    } else {
        alert("Oops! There was a problem with your submission.");
    }
}