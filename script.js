// Birthday Website JavaScript

// Generate more confetti dynamically
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 100);
    }
}

// Add click effects to gifts
function addGiftInteractions() {
    const gifts = document.querySelectorAll('.gift');
    gifts.forEach((gift, index) => {
        gift.addEventListener('click', () => {
            // Create sparkle effect
            createSparkles(gift);
            
            // Show gift message
            showGiftMessage(index);
            
            // Generate confetti
            createConfetti();
        });
    });
}

// Create sparkle effect around clicked element
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = centerX + 'px';
        sparkle.style.top = centerY + 'px';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.backgroundColor = '#feca57';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        
        const angle = (i * 45) * Math.PI / 180;
        const distance = 50;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        document.body.appendChild(sparkle);
        
        sparkle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}

// Show gift messages
function showGiftMessage(giftIndex) {
    const messages = [
        "Love is the greatest gift of all! ❤️",
        "Joy brings happiness to every moment! 😊",
        "Success follows those who believe! ⭐",
        "Laughter is the best medicine! 😄"
    ];
    
    const message = messages[giftIndex];
    
    // Create message popup
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    popup.style.padding = '20px 30px';
    popup.style.borderRadius = '15px';
    popup.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    popup.style.zIndex = '1001';
    popup.style.fontSize = '1.2rem';
    popup.style.fontWeight = '600';
    popup.style.color = '#333';
    popup.style.textAlign = 'center';
    popup.style.backdropFilter = 'blur(10px)';
    popup.textContent = message;
    
    document.body.appendChild(popup);
    
    // Animate in
    popup.animate([
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 }
    ], {
        duration: 300,
        easing: 'ease-out'
    });
    
    // Remove after 2 seconds
    setTimeout(() => {
        popup.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 }
        ], {
            duration: 300,
            easing: 'ease-in'
        }).onfinish = () => popup.remove();
    }, 2000);
}

// Add music functionality
function addMusicControls() {
    // Create music button
    const musicBtn = document.createElement('button');
    musicBtn.innerHTML = '<i class="fas fa-music"></i>';
    musicBtn.style.position = 'fixed';
    musicBtn.style.top = '20px';
    musicBtn.style.right = '20px';
    musicBtn.style.width = '50px';
    musicBtn.style.height = '50px';
    musicBtn.style.borderRadius = '50%';
    musicBtn.style.border = 'none';
    musicBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    musicBtn.style.color = '#667eea';
    musicBtn.style.fontSize = '1.2rem';
    musicBtn.style.cursor = 'pointer';
    musicBtn.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    musicBtn.style.zIndex = '1000';
    musicBtn.style.transition = 'all 0.3s ease';
    
    musicBtn.addEventListener('mouseenter', () => {
        musicBtn.style.transform = 'scale(1.1)';
        musicBtn.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    });
    
    musicBtn.addEventListener('mouseleave', () => {
        musicBtn.style.transform = 'scale(1)';
        musicBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    });
    
    musicBtn.addEventListener('click', () => {
        // Toggle music (placeholder for actual music functionality)
        musicBtn.style.backgroundColor = musicBtn.style.backgroundColor === 'rgba(255, 255, 255, 1)' 
            ? 'rgba(255, 107, 107, 0.9)' 
            : 'rgba(255, 255, 255, 0.9)';
        
        // Show music message
        showMusicMessage();
    });
    
    document.body.appendChild(musicBtn);
}

// Show music message
function showMusicMessage() {
    const message = document.createElement('div');
    message.style.position = 'fixed';
    message.style.bottom = '20px';
    message.style.left = '50%';
    message.style.transform = 'translateX(-50%)';
    message.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    message.style.color = 'white';
    message.style.padding = '10px 20px';
    message.style.borderRadius = '25px';
    message.style.fontSize = '0.9rem';
    message.style.zIndex = '1000';
    message.textContent = '🎵 Music feature coming soon! 🎵';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.animate([
            { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
            { opacity: 0, transform: 'translateX(-50%) translateY(-20px)' }
        ], {
            duration: 500,
            easing: 'ease-out'
        }).onfinish = () => message.remove();
    }, 2000);
}

// Add birthday countdown (if it's not the actual birthday)
function addBirthdayCountdown() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 11, 25); // December 25th as example
    
    if (today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate()) {
        // It's the birthday!
        createConfetti();
        setTimeout(createConfetti, 2000);
        setTimeout(createConfetti, 4000);
    } else {
        // Show countdown
        if (today > birthday) {
            birthday.setFullYear(birthday.getFullYear() + 1);
        }
        
        const diffTime = birthday - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        const countdown = document.createElement('div');
        countdown.style.position = 'fixed';
        countdown.style.top = '20px';
        countdown.style.left = '20px';
        countdown.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        countdown.style.padding = '15px 20px';
        countdown.style.borderRadius = '15px';
        countdown.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        countdown.style.zIndex = '1000';
        countdown.style.fontSize = '0.9rem';
        countdown.style.color = '#333';
        countdown.innerHTML = `🎂 ${diffDays} days until next birthday! 🎂`;
        
        document.body.appendChild(countdown);
    }
}

// Add floating balloons
function addFloatingBalloons() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.style.position = 'fixed';
            balloon.style.left = Math.random() * 100 + '%';
            balloon.style.bottom = '-50px';
            balloon.style.width = '30px';
            balloon.style.height = '40px';
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
            balloon.style.zIndex = '999';
            balloon.style.pointerEvents = 'none';
            
            document.body.appendChild(balloon);
            
            balloon.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: 'translateY(-100vh) rotate(360deg)', opacity: 0 }
            ], {
                duration: 8000 + Math.random() * 4000,
                easing: 'linear'
            }).onfinish = () => balloon.remove();
        }, i * 2000);
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add interactive features
    addGiftInteractions();
    addMusicControls();
    addBirthdayCountdown();
    addPhotoUpload();
    
    // Start floating balloons
    setInterval(addFloatingBalloons, 10000);
    
    // Initial confetti burst
    setTimeout(createConfetti, 1000);
    
    // Add click anywhere to create confetti
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.gift') && !e.target.closest('button')) {
            createSparkles(e.target);
        }
    });
    
    // Add birthday message typing effect
    const birthdayTitle = document.querySelector('.birthday-title');
    if (birthdayTitle) {
        birthdayTitle.style.opacity = '0';
        birthdayTitle.animate([
            { opacity: 0, transform: 'translateY(20px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
    }
    
    console.log('🎉 Birthday website loaded successfully! 🎉');
});

// Add photo upload functionality
function addPhotoUpload() {
    const photoPlaceholder = document.getElementById('photoPlaceholder');
    const photoInput = document.getElementById('photoInput');
    
    if (photoPlaceholder && photoInput) {
        photoPlaceholder.addEventListener('click', () => {
            photoInput.click();
        });
        
        photoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    // Create image element
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.alt = 'Birthday Boy';
                    img.className = 'friend-photo';
                    
                    // Clear placeholder content
                    photoPlaceholder.innerHTML = '';
                    photoPlaceholder.appendChild(img);
                    
                    // Add success message
                    showPhotoSuccess();
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// Show photo upload success message
function showPhotoSuccess() {
    const message = document.createElement('div');
    message.style.position = 'fixed';
    message.style.bottom = '20px';
    message.style.left = '50%';
    message.style.transform = 'translateX(-50%)';
    message.style.backgroundColor = 'rgba(76, 175, 80, 0.9)';
    message.style.color = 'white';
    message.style.padding = '10px 20px';
    message.style.borderRadius = '25px';
    message.style.fontSize = '0.9rem';
    message.style.zIndex = '1000';
    message.textContent = '📸 Photo added successfully! 🎉';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.animate([
            { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
            { opacity: 0, transform: 'translateX(-50%) translateY(-20px)' }
        ], {
            duration: 500,
            easing: 'ease-out'
        }).onfinish = () => message.remove();
    }, 2000);
} 