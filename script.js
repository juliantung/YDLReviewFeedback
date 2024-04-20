
function rate(stars) {
    var pageTitle = document.getElementById('pageTitle');
    if (stars < 4) {
        
        pageTitle.textContent = "How can we improve?";
        
        document.getElementById('ratings').style.display = 'none';
        
        document.getElementById('feedback').style.display = 'block';
    } else {
        
        window.location.href = 'https://www.google.com/search?q=Yew+digital+lock+&sca_esv=bb7869262e6227ae&sca_upv=1&sxsrf=ACQVn09At5M4LFi8vgb3ER4UFtUvw4JPbA%3A1713634739871&ei=s_0jZqXnNPWr4-EPwL6qoAM&ved=0ahUKEwjljMfvqtGFAxX11TgGHUCfCjQQ4dUDCBA&uact=5&oq=Yew+digital+lock+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEVlldyBkaWdpdGFsIGxvY2sgMgQQIxgnMgQQIxgnMgQQIxgnMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyCxAuGIAEGMcBGK8BMgsQABiABBiGAxiKBUi_CFB5WOMEcAF4AJABAJgBWKABngKqAQE0uAEDyAEA-AEBmAIFoAKzAsICDhAAGIAEGLADGIYDGIoFwgIGEAAYFhgemAMAiAYBkAYBkgcBNaAH9RY&sclient=gws-wiz-serp#lrd=0x674a12c053bf99df:0xd8e1da69a8a10a1e,3,5';
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

