// Online Exam Portal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Add event listeners
    document.getElementById('login-form').addEventListener('submit', handleStudentLogin);
    document.getElementById('admin-login-form').addEventListener('submit', handleAdminLogin);
    
    // Hide login sections initially
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('admin-login-section').classList.add('hidden');
    document.getElementById('exam-section').classList.add('hidden');
}

function showLogin() {
    // Hide hero section and show student login
    document.querySelector('.hero').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('admin-login-section').classList.add('hidden');
    document.getElementById('exam-section').classList.add('hidden');
}

function showAdminLogin() {
    // Hide hero section and show admin login
    document.querySelector('.hero').classList.add('hidden');
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('admin-login-section').classList.remove('hidden');
    document.getElementById('exam-section').classList.add('hidden');
}

function handleStudentLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (in real app, this would be server-side)
    if (username && password) {
        // Show exam section
        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('exam-section').classList.remove('hidden');
        
        // Show success message
        showNotification('Login successful! Welcome, ' + username, 'success');
    } else {
        showNotification('Please enter both username and password', 'error');
    }
}

function handleAdminLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    
    // Simple validation (in real app, this would be server-side)
    if (username === 'admin' && password === 'admin123') {
        showNotification('Admin login successful!', 'success');
        // In a real app, this would redirect to admin dashboard
        setTimeout(() => {
            showNotification('Admin dashboard would be implemented here', 'info');
        }, 2000);
    } else {
        showNotification('Invalid admin credentials', 'error');
    }
}

function startExam(subject) {
    showNotification(`Starting ${subject.toUpperCase()} exam...`, 'info');
    
    // In a real app, this would navigate to the exam interface
    setTimeout(() => {
        showNotification(`${subject.toUpperCase()} exam interface would be implemented here`, 'info');
    }, 1500);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'info':
            notification.style.backgroundColor = '#17a2b8';
            break;
        default:
            notification.style.backgroundColor = '#6c757d';
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Timer functionality for exams
let examTimer = null;
let examTimeRemaining = 0;

function startTimer(duration, displayElement) {
    examTimeRemaining = duration * 60; // Convert minutes to seconds
    
    examTimer = setInterval(function() {
        const minutes = Math.floor(examTimeRemaining / 60);
        const seconds = examTimeRemaining % 60;
        
        displayElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (examTimeRemaining <= 0) {
            clearInterval(examTimer);
            showNotification('Time is up! Exam submitted automatically.', 'error');
            submitExam();
        }
        
        examTimeRemaining--;
    }, 1000);
}

function submitExam() {
    // In a real app, this would submit the exam to the server
    showNotification('Exam submitted successfully!', 'success');
    // Redirect back to exam list
    document.getElementById('exam-section').classList.remove('hidden');
}

// Question management
let currentQuestion = 0;
let answers = {};

function loadQuestion(questionIndex) {
    // In a real app, this would load questions from a database
    console.log(`Loading question ${questionIndex + 1}`);
}

function saveAnswer(questionId, answer) {
    answers[questionId] = answer;
    console.log(`Saved answer for question ${questionId}: ${answer}`);
}

// Navigation functions
function nextQuestion() {
    currentQuestion++;
    loadQuestion(currentQuestion);
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Go back to previous screen
        document.querySelector('.hero').classList.remove('hidden');
        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('admin-login-section').classList.add('hidden');
        document.getElementById('exam-section').classList.add('hidden');
    }
});
