function attachGradientEvents() {
    const gradient = document.getElementById('gradient-box');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', (e) => {
        
        let percentage = e.offsetX 
        result.textContent = `${Math.floor(percentage / 3)}%`
    });
}