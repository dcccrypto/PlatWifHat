// Contract address functionality
function copyContractAddress() {
    const address = "3JiUb9kVFstMaXjooqXuynsfQfyTwdoMmB6bvLZGmoon";
    navigator.clipboard.writeText(address)
        .then(() => {
            const copyBtn = document.getElementById('copyBtn');
            copyBtn.textContent = 'Copied! ✅';
            setTimeout(() => {
                copyBtn.textContent = 'Copy Address 📋';
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy:', err);
        });
}

// Real-time token data simulation (replace with actual API calls)
function updateTokenData() {
    // Simulate real-time updates - replace with actual API calls
    document.getElementById('price').textContent = '$0.00042';
    document.getElementById('mcap').textContent = '$420,000';
    document.getElementById('holders').textContent = '1,337';
}

// Update data every 30 seconds
setInterval(updateTokenData, 30000); 