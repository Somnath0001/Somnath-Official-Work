async function submitFeedback(btn, type) {
        // 1. YOUR GOOGLE FORM DATA (Update these!)
        const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf5BN5-JLE_xbFTpiJy8eveXKU_p84dPEbkWQGGKwRT0VzqdQ/formResponse";
        const ENTRY_ID = "entry.540516050"; // The ID for your "Is this page helpful?" question
        const value = (type === 'yes') ? "yes" : "no";

    const formData = new FormData();
    formData.append(ENTRY_ID, value);

    // 1. Darken the clicked button
    btn.classList.add('clicked');

    // 2. Submit to Google (Silent)
    try {
        await fetch(FORM_URL, { method: "POST", mode: "no-cors", body: formData });
    } catch (e) { console.error(e); }

    // 3. Swap content (Height stays same due to CSS)
    setTimeout(() => {
        document.getElementById('question-ui').classList.add('hidden');
        document.getElementById('thank-you-msg').classList.remove('hidden');
        
        // 4. After showing message, make the bar disappear
        setTimeout(() => {
            const bar = document.getElementById('feedback-bar');
            bar.style.opacity = '0';
            bar.style.transform = 'translateX(-50%) translateY(20px)'; // Slides down slightly
            
            // Optional: Remove from DOM completely after animation
            setTimeout(() => { bar.style.display = 'none'; }, 500);
        }, 3000); 
    }, 400);
}