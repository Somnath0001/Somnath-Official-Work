document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // 1. YOUR GOOGLE FORM CONFIGURATION
        // Replace 'YOUR_FORM_ID' with the actual ID from your Google Form URL
        const G_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfRttp18Zf-GoOmgfe4KPmAiknJbomLsrpslZl6OI4rNuz-Hg/formResponse";

        // Replace these 'entry.XXXXX' strings with your actual entry IDs
        const fieldMappings = {
            helpful: "entry.326955045",      // Radio button ID
            suggestions: "entry.1696159737",  // Textarea ID
            user_name: "entry.485428648",    // Name ID
            user_email: "entry.1521491267"    // Email ID
        };

        // 2. PREPARE THE DATA
        const formData = new FormData(this);
        const googleFormData = new URLSearchParams();

        googleFormData.append(fieldMappings.helpful, formData.get('helpful'));
        googleFormData.append(fieldMappings.suggestions, formData.get('suggestions'));
        googleFormData.append(fieldMappings.user_name, formData.get('user_name'));
        googleFormData.append(fieldMappings.user_email, formData.get('user_email'));

        // 3. SUBMIT TO GOOGLE
        // Note: Google Forms blocks CORS, so we use 'no-cors' mode. 
        // It will submit successfully even if the browser console shows an 'error'.
        fetch(G_FORM_URL, {
            method: "POST",
            mode: "no-cors",
            body: googleFormData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }).then(() => {
            // Show success message
            document.getElementById('feedback-content').style.display = 'none';
            document.getElementById('success-message').style.display = 'block';
        }).catch(error => {
            alert("Something went wrong. Please try again.");
            console.error(error);
        });
    });