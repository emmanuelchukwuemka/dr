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

    console.log('Order submitted:', data);

    // Simulate API call
    setTimeout(() => {
        // Redirect to thank you page
        window.location.href = 'thankyou.html';
    }, 1500);
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
