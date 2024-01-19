function updateTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
  
    document.getElementById('hour').innerText = hours;
    document.getElementById('minute').innerText = minutes;
    document.getElementById('second').innerText = seconds;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initial call to display time immediately
  updateTime();
  