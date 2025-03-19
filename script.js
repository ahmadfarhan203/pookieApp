const hayirBtn = document.getElementById('hayirBtn');

hayirBtn.addEventListener('mouseover', function() {
    const maxX = window.innerWidth - hayirBtn.offsetWidth;
    const maxY = window.innerHeight - hayirBtn.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    hayirBtn.style.position = 'fixed';
    hayirBtn.style.left = randomX + 'px';
    hayirBtn.style.top = randomY + 'px';
}); 