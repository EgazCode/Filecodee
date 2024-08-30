document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    if (localStorage.getItem(username)) {
        alert('Username already exists!');
    } else {
        localStorage.setItem(username, password);
        alert('Registration successful!');
        document.getElementById('register-form').reset();
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        localStorage.setItem('loggedIn', 'true');
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to another page
    } else {
        alert('Invalid username or password!');
    }
});

// Check if the user is already logged in
if (localStorage.getItem('loggedIn') === 'true') {
    window.location.href = 'dashboard.html'; // Redirect to another page
}


function toggleTheme() {
    const body = document.body;
    const currentTheme = body.style.background;

    if (currentTheme === 'linear-gradient(to right, #ff7e5f, #feb47b)') {
        body.style.background = 'linear-gradient(to right, #2b2b2b, #4f4f4f)';
        document.querySelector('.container').style.background = '#333';
        document.querySelector('button').style.background = '#555';
        document.querySelector('button').style.color = '#fff';
        document.querySelector('button').style.borderColor = '#777';
    } else {
        body.style.background = 'linear-gradient(to right, #ff7e5f, #feb47b)';
        document.querySelector('.container').style.background = '#fff';
        document.querySelector('button').style.background = '#ff7e5f';
        document.querySelector('button').style.color = '#fff';
        document.querySelector('button').style.borderColor = '#ff7e5f';
    }
}

function toggleMembers(id) {
    const members = document.getElementById(id);
    if (members.style.display === "none" || members.style.display === "") {
        members.style.display = "block";
    } else {
        members.style.display = "none";
    }
}

// Data jadwal piket
const jadwalPiket = [
    { hari: 'Senin', nama: 'Aziz Ega Mughni Ella Candra Ayu Sri Ayu Indah' },
    { hari: 'Selasa', nama: 'Budi' },
    { hari: 'Rabu', nama: 'Citra' },
    { hari: 'Kamis', nama: 'Doni' },
    { hari: 'Jumat', nama: 'Eka' }
];

// Mengisi tabel dengan data dari jadwalPiket
function loadSchedule() {
    const scheduleBody = document.getElementById('schedule-body');
    jadwalPiket.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.hari}</td><td>${item.nama}</td>`;
        scheduleBody.appendChild(row);
    });
}

// Memuat jadwal ketika halaman di-load
window.onload = loadSchedule;
