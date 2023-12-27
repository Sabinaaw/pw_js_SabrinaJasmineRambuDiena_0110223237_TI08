function checkLogin() {
    // nilai username dan password dari form
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
  
    // Tentukan username dan password yang diharapkan
    var expectedUsername = "ahmad2017";
    var expectedPassword = "integrity";
  
    // Lakukan pengecekan
    if (usernameInput === expectedUsername && passwordInput === expectedPassword) {
      // Jika login sukses
      window.location.href = "output.html";
      alert("Login Sukses");
    
      
    } else {
      // Jika login gagal
      alert("Login Gagal");
    }
  }
  