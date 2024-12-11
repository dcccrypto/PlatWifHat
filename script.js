// Contract address functionality
function copyContractAddress() {
    const address = "3JiUb9kVFstMaXjooqXuynsfQfyTwdoMmB6bvLZGmoon";
    navigator.clipboard.writeText(address)
        .then(() => {
            // Find the clicked button
            const clickedBtn = event.currentTarget;
            const originalText = clickedBtn.textContent;
            
            // Update button text
            clickedBtn.textContent = 'Copied! ✅';
            
            // Reset button text after 2 seconds
            setTimeout(() => {
                clickedBtn.textContent = originalText;
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy:', err);
            // Show error feedback
            const clickedBtn = event.currentTarget;
            clickedBtn.textContent = 'Failed to copy ❌';
            setTimeout(() => {
                clickedBtn.textContent = originalText;
            }, 2000);
        });
}

// Initialize all copy buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all copy buttons
    const copyButtons = document.querySelectorAll('.copy-btn, .footer-copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', copyContractAddress);
    });
});

// Real-time token data simulation (replace with actual API calls)
function updateTokenData() {
    // Simulate real-time updates - replace with actual API calls
    document.getElementById('price').textContent = '$0.00042';
    document.getElementById('mcap').textContent = '$420,000';
    document.getElementById('holders').textContent = '1,337';
}

// Update data every 30 seconds
setInterval(updateTokenData, 30000); 