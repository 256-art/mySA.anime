    function login() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        if (username === "franx" && password === "liga1en") {
            alert("Login berhasil!");
            window.location.href = "halaman_berikutnya.html";
        } else {
            alert("Username atau password salah!");
        }
    }