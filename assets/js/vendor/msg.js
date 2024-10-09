<!-- JavaScript code goes here -->
    <script>
        // This function will run when the form is submitted
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the form from submitting the traditional way (page refresh)
            
            const form = event.target; // Get the form element
            const formData = new FormData(form); // Get the form data

            // Sending form data using the Fetch API
            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert('Thank you for your message!'); // Success message
                    form.reset(); // Clear the form after submission
                } else {
                    alert('There was a problem with your submission. Please try again.');
                }
            }).catch(error => {
                alert('There was a problem with your submission. Please try again.');
            });
        });
    </script>