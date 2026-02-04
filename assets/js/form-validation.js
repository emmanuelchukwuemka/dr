document.getElementById('purchase-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner');

    // Show loading state
    btnText.style.display = 'none';
    spinner.style.display = 'inline-block';
    submitBtn.disabled = true;

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Build WhatsApp message
    const waNumber = '2348167332278'; // BLUEFIG WhatsApp number (no + or spaces)
    let message = `New order from website:\n`;
    message += `Name: ${data.name || ''}\n`;
    message += `Phone: ${data.phone || ''}\n`;
    message += `City: ${data.city || ''}\n`;
    message += `Address: ${data.address || ''}\n`;
    message += `Package: ${data.package || ''}`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${waNumber}?text=${encoded}`;

    console.log('Opening WhatsApp URL:', waUrl);

    // Try to open WhatsApp in a new tab; if blocked, open in the same tab as fallback
    const newWin = window.open(waUrl, '_blank');
    if (!newWin) {
        // Popup blocked — navigate current tab to WhatsApp URL
        window.location.href = waUrl;
    } else {
        // Opened in new tab successfully — redirect current page to thank-you
        setTimeout(() => {
            window.location.href = 'thankyou.html';
        }, 1200);
    }
});

// Nigerian Phone Validation
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function (e) {
    const value = e.target.value;
    // Simple check for Nigerian format (starting with 07, 08, 09 or +234)
    const isValid = /^(070|080|081|090|091|071|01|\+234)\d{7,10}$/.test(value.replace(/\s/g, ''));

    if (value.length > 5 && !isValid) {
        phoneInput.style.borderColor = '#ef4444';
    } else {
        phoneInput.style.borderColor = '#e2e8f0';
    }
});
