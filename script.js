// Contract address functionality
function copyContractAddress() {
    const address = "3JiUb9kVFstMaXjooqXuynsfQfyTwdoMmB6bvLZGmoon";
    const btn = event.currentTarget;
    const originalText = btn.textContent;
    
    navigator.clipboard.writeText(address)
        .then(() => {
            btn.textContent = 'Copied! ✅';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('copied');
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy:', err);
            btn.textContent = 'Failed to copy ❌';
            btn.classList.add('failed');
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('failed');
            }, 2000);
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

// Share meme functionality
function shareMeme(event) {
    const memeCard = event.target.closest('.meme-card');
    const memeImg = memeCard.querySelector('img').src;
    
    if (navigator.share) {
        navigator.share({
            title: 'Check out this PlatWifHat meme! 🦆💪',
            text: 'Found this awesome meme on PlatWifHat! #PLATWHAT #Solana',
            url: window.location.origin + '/' + memeImg
        })
        .catch(error => console.log('Error sharing:', error));
    } else {
        // Fallback for browsers that don't support Web Share API
        const dummy = document.createElement('textarea');
        document.body.appendChild(dummy);
        dummy.value = window.location.origin + '/' + memeImg;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        
        alert('Meme URL copied to clipboard!');
    }
}

// Initialize share buttons
document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', shareMeme);
    });
}); 