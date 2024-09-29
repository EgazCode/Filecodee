// Simpan data login pengawas
const adminData = {
    username: "egzz",
    password: "egzz"
};

// Simpan data login siswa (30 siswa)
const studentData = [
    { username: "egasaputra", password: "290508" },
    { username: "siswa02", password: "pass02" },
    { username: "siswa03", password: "pass03" },
    { username: "siswa04", password: "pass04" },
    { username: "siswa05", password: "pass05" },
    { username: "siswa06", password: "pass06" },
    { username: "siswa07", password: "pass07" },
    { username: "siswa08", password: "pass08" },
    { username: "siswa09", password: "pass09" },
    { username: "siswa10", password: "pass10" },
    { username: "siswa11", password: "pass11" },
    { username: "siswa12", password: "pass12" },
    { username: "siswa13", password: "pass13" },
    { username: "siswa14", password: "pass14" },
    { username: "siswa15", password: "pass15" },
    { username: "siswa16", password: "pass16" },
    { username: "siswa17", password: "pass17" },
    { username: "siswa18", password: "pass18" },
    { username: "siswa19", password: "pass19" },
    { username: "siswa20", password: "pass20" },
    { username: "siswa21", password: "pass21" },
    { username: "siswa22", password: "pass22" },
    { username: "siswa23", password: "pass23" },
    { username: "siswa24", password: "pass24" },
    { username: "siswa25", password: "pass25" },
    { username: "siswa26", password: "pass26" },
    { username: "siswa27", password: "pass27" },
    { username: "siswa28", password: "pass28" },
    { username: "siswa29", password: "pass29" },
    { username: "siswa30", password: "pass30" }
];

// Token untuk masuk ujian
const validToken = "12345";

// Login untuk Pengawas
document.getElementById("adminLogin").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    if (username === adminData.username && password === adminData.password) {
        alert("Login Pengawas Berhasil");
        window.location.href = "admin-dashboard.html"; // Halaman Pengawas
    } else {
        alert("Username atau Password Pengawas Salah");
    }
});

// Login untuk Siswa
document.getElementById("studentLogin").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("studentUsername").value;
    const password = document.getElementById("studentPassword").value;
    const token = document.getElementById("token").value;

    const student = studentData.find(s => s.username === username && s.password === password);

    if (student && token === validToken) {
        alert("Login Siswa Berhasil");
        window.location.href = "student-exam.html"; // Halaman Ujian Siswa
    } else {
        alert("Login Gagal: Periksa Username, Password, atau Token");
    }
});
