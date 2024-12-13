document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            
            // Set active nav link based on current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const activeLink = document.querySelector(`a[href="${currentPage}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
            
            // Initialize mobile menu
            initializeMobileMenu();
        });

    // Load footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
            // Initialize footer copy buttons
            initializeFooterButtons();
        });
});

function initializeMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navContainer = document.querySelector('.nav-container');

    menuBtn.addEventListener('click', function() {
        navContainer.classList.toggle('show');
        menuBtn.textContent = navContainer.classList.contains('show') ? '✕' : '☰';
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            navContainer.classList.remove('show');
            menuBtn.textContent = '☰';
        }
    });

    navContainer.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

function initializeFooterButtons() {
    const copyButtons = document.querySelectorAll('.footer-copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
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
                        btn.textContent = 'Copy 📋';
                        btn.classList.remove('failed');
                    }, 2000);
                });
        });
    });
} 