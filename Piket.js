document.addEventListener("DOMContentLoaded", function() {
    const days = document.querySelectorAll(".day");
    
    days.forEach((day, index) => {
        setTimeout(() => {
            day.classList.add("show");
        }, index * 300); // Delay antara setiap hari
    });
});
