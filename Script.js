const questions = [
    { question: "Apa warna bendera Indonesia?", options: ["Merah Putih", "Biru Kuning", "Hijau Merah", "Putih Kuning"], correct: "Merah Putih" },
    { question: "Siapa presiden pertama Indonesia?", options: ["Soekarno", "Suharto", "Jokowi", "BJ Habibie"], correct: "Soekarno" },
    // Tambahkan soal-soal lainnya hingga 20 soal
];

const questionsContainer = document.getElementById('questions');
const form = document.getElementById('cbtForm');
const resultDiv = document.getElementById('result');
const totalPointsPerQuestion = 5;
const requiredIP = "192.168.160.143"; // IP hotspot (sesuaikan dengan IP hotspot HP)

window.onload = () => {
    checkIPAddress();
    renderQuestions();
};

function renderQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <label>${index + 1}. ${q.question}</label>
            ${q.options.map(option => `
                <input type="radio" name="question${index}" value="${option}"> ${option}<br>
            `).join('')}
            <button type="button" onclick="clearAnswer(${index})">Hapus Jawaban</button>
        `;
        questionsContainer.appendChild(questionDiv);
    });
}

function clearAnswer(index) {
    const radios = document.getElementsByName(`question${index}`);
    radios.forEach(radio => radio.checked = false);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
    questions.forEach((q, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`);
        if (answer && answer.value === q.correct) {
            score += totalPointsPerQuestion;
        }
    });
    resultDiv.textContent = `Nilai Anda: ${score} dari ${questions.length * totalPointsPerQuestion}`;
});

function checkIPAddress() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            if (!data.ip.startsWith(requiredIP)) {
                alert("Anda tidak dapat mengakses ujian ini tanpa menggunakan hotspot yang telah ditentukan.");
                document.body.innerHTML = "<h1>Akses Ujian Ditolak</h1>";
            }
        })
        .catch(error => {
            console.error("Gagal mendapatkan IP:", error);
            alert("Kesalahan jaringan, silakan coba lagi.");
        });
}
