function login() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    // Hashing username & password
    var hashedUsername = CryptoJS.SHA256(usernameInput).toString();
    var hashedPassword = CryptoJS.SHA256(passwordInput).toString();

    // Hash hasil dari "franx" dan "liga1en"
    var correctUsernameHash = "3f0f1f3b9c5f8d8e8e934bff457a5408c716db9deaa8a8473bb77f9e27cd8c68";
    var correctPasswordHash = "c4ca4238a0b923820dcc509a6f75849b";

    if (hashedUsername === correctUsernameHash && hashedPassword === correctPasswordHash) {
        alert("Login berhasil!");
        window.location.href = "symbol.html";
    } else {
        alert("Username atau password salah!");
    }
}