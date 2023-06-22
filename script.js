function login() {
    // Lakukan validasi login di sini

    // Redirect ke halaman berikutnya setelah login sukses

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMsg = document.getElementById("error-msg");

    if (username === "admin" && password === "password") {
        // Jika login berhasil, arahkan pengguna ke halaman berikutnya
        window.location.href = "Belajar Html.html";
    } else {
        // Jika login gagal, tampilkan pesan kesalahan
        errorMsg.textContent = "Invalid username or password. Please try again.";
    }
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var container = document.querySelector(".container");
    container.classList.toggle("dark-mode");
    
    var h1 = document.querySelector(".container h1");
    h1.classList.toggle("dark-mode");

    var inputs = document.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.toggle("dark-mode");
    }

    var buttons = document.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("dark-mode");
    }
}
