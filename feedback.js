async function submitFeedback(btn, type) {
        // 1. YOUR GOOGLE FORM DATA (Update these!)
        const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf5BN5-JLE_xbFTpiJy8eveXKU_p84dPEbkWQGGKwRT0VzqdQ/formResponse";
        const ENTRY_ID = "entry.540516050"; // The ID for your "Is this page helpful?" question
        const value = (type === 'yes') ? "yes" : "no"; // Must match your Form's option text exactly

        // 2. Prepare the data for submission
        const formData = new FormData();
        formData.append(ENTRY_ID, value);

        // 3. UI: Darken the button immediately
        btn.classList.add('clicked');

        // 4. Background Submission (Silently)
        try {
            // Note: 'no-cors' is required to prevent browser security blocks from Google
            await fetch(FORM_URL, {
            method: "POST",
            mode: "no-cors", 
            body: formData
            });
        } catch (error) {
            console.error("Submission failed", error);
        }

        // 5. Show Thank You Message
        setTimeout(() => {
            document.getElementById('question-ui').classList.add('hidden');
            document.getElementById('thank-you-msg').classList.remove('hidden');
            
            // Auto-hide the bar after 3 seconds
            setTimeout(() => {
            document.getElementById('feedback-bar').style.transform = 'translateY(100%)';
            }, 3000);
        }, 400);
    }