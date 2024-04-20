
function rate(stars) {
    var pageTitle = document.getElementById('pageTitle');
    if (stars < 4) {
        
        pageTitle.textContent = "How can we improve?";
        
        document.getElementById('ratings').style.display = 'none';
        
        document.getElementById('feedback').style.display = 'block';
    } else {
        
        window.location.href = 'https://g.page/r/CR4Koahp2uHYEBM/review';
    }
}


document.getElementById('feedbackText').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitFeedback();
    }
});


function submitFeedback() {
    var feedback = document.getElementById('feedbackText').value;
    
    if (feedback.length < 25) {
        alert("Please provide feedback of at least 25 characters.");
        return; 
    }
    console.log('Feedback submitted:', feedback);
    document.getElementById('feedback').style.display = 'none'; 
    document.getElementById('feedbackConfirmation').style.display = 'block'; 
    document.getElementById('pageTitle').textContent = "We have received your feedback.";
}


function highlightStars(stars) {
    var starElements = document.getElementsByClassName('star');
    for (var i = 0; i < starElements.length; i++) {
        if (i < stars) {
            starElements[i].classList.add('highlighted');
        } else {
            starElements[i].classList.remove('highlighted');
        }
    }
}


function resetStars() {
    var starElements = document.getElementsByClassName('star');
    for (var i = 0; i < starElements.length; i++) {
        starElements[i].classList.remove('highlighted');
    }
}

