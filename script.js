// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu functionality
const mobileMenuButton = document.querySelector('button.md\\:hidden');
const navLinks = document.querySelector('.hidden.md\\:flex');

if (mobileMenuButton && navLinks) {
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-full');
        navLinks.classList.toggle('left-0');
        navLinks.classList.toggle('right-0');
        navLinks.classList.toggle('bg-white');
        navLinks.classList.toggle('p-4');
        navLinks.classList.toggle('space-y-4');
        navLinks.classList.toggle('shadow-xl');
    });
}

// Chat functionality
function showMainContent() {
    const chatContainer = document.getElementById('chat-container');
    const mainContent = document.getElementById('main-content');
    
    if (chatContainer && mainContent) {
        chatContainer.style.display = 'none';
        mainContent.style.display = 'block';
        document.body.style.overflow = 'auto';
    }
}

function sendMessage(event) {
    event.preventDefault();
    
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate AI response
    setTimeout(() => {
        hideTypingIndicator();
        generateAIResponse(message);
    }, 1500 + Math.random() * 1000);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<p style="font-family: 'Cormorant Garamond', serif;">${text}</p>`;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    const indicator = document.querySelector('.typing-indicator');
    const messagesContainer = document.getElementById('chat-messages');
    
    if (indicator) {
        indicator.style.display = 'block';
    }
    if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

function hideTypingIndicator() {
    const indicator = document.querySelector('.typing-indicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

function generateAIResponse(userMessage) {
    const keratonResponses = [
        "Wah, pertanyaan yang sangat bijaksana! Menurut kearifan keraton Jawa...",
        "Sugeng rawuh! Kula aturaken matur nuwun sampun badhe takon. Menurut tradisi keraton...",
        "Pertanyaan yang sangat mendalam! Sebagai AI yang terinspirasi keraton, kula badhe njawab kanthi kebijaksanaan...",
        "Wah, ini pertanyaan yang penuh makna. Dalam filosofi keraton Jawa, kita mengenal prinsip 'memayu hayuning bawono' yang berarti...",
        "Kula seneng panjenengan takon bab punika! Dalam tradisi keraton, kita diajarkan untuk selalu...",
        "Pertanyaan yang bagus! Sebagai CleverjavaAI Keraton, kula menggabungkan teknologi modern dengan kearifan keraton. Mangkono...",
        "Matur nuwun sampun badhe takon. Menurut kearifan leluhur keraton Jawa..."
    ];
    
    const randomResponse = keratonResponses[Math.floor(Math.random() * keratonResponses.length)];
    addMessage(randomResponse, 'ai');
}

// Close chat when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
        chatContainer.addEventListener('click', (e) => {
            if (e.target === chatContainer) {
                showMainContent();
            }
        });
    }
    
    // Close chat with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            showMainContent();
        }
    });
    
    // Auto focus on input when chat loads
    const messageInput = document.getElementById('message-input');
    if (messageInput) {
        setTimeout(() => {
            messageInput.focus();
        }, 100);
    }
});

// Image error handling
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            if (this.alt.includes('Logo')) {
                this.style.backgroundColor = '#D4AF37';
            } else if (this.alt.includes('Ilustrasi')) {
                this.style.backgroundColor = '#F5E6D3';
            } else {
                this.style.backgroundColor = '#F8F0E3';
            }
            this.style.padding = '20px';
            this.style.borderRadius = '8px';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.color = '#8B0000';
            this.style.fontFamily = "'Cormorant Garamond', serif";
            this.style.fontSize = '14px';
            this.innerHTML = '🖼️ Gambar sedang dimuat...';
        });
    });
});

