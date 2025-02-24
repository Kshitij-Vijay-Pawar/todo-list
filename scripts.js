function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 

    let timeString = `${hours}:${minutes}${ampm}`;
    document.getElementById("time").innerText = timeString;
}

updateTime(); 
setInterval(updateTime, 1000); 


function openModal() {
    document.getElementById("inputs").style.display = "flex";
}

function closeModal() {
    document.getElementById("inputs").style.display = "none";
}
