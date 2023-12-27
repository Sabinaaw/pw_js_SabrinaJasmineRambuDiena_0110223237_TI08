function validateForm(event) {
    event.preventDefault(); // Prevent form submission to validate with JavaScript
  
    // Ambil nilai input dari form
    var namaPelanggan = document.getElementById("namaPelanggan").value;
    var email = document.getElementById("email").value;
    var jamKeberangkatan = document.getElementById("jamKeberangkatan").value;
    var tujuanKeberangkatan = document.getElementById("tujuanKeberangkatan").value;
    var jumlahTiket = document.getElementById("jumlahTiket").value;
  
    // Lakukan validasi
    var isValid = true;
  
    // Validasi Nama Pelanggan (required, maksimum 30 karakter)
    if (!namaPelanggan || namaPelanggan.length > 30) {
      displayError("Nama Pelanggan harus diisi (maksimal 30 karakter).", "namaPelanggan");
      isValid = false;
    } else {
      hideError("namaPelanggan");
    }
  
    // Validasi Email (required, email format)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !email.match(emailPattern)) {
      displayError("Email harus diisi dengan format yang benar.", "email");
      isValid = false;
    } else {
      hideError("email");
    }
  
    // Validasi Jam Keberangkatan (required, format jam antara 00.00 – 23.59)
    var jamPattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!jamKeberangkatan || !jamKeberangkatan.match(jamPattern)) {
      displayError("Jam Keberangkatan harus diisi dengan format 24 jam (misal: 12.00).", "jamKeberangkatan");
      isValid = false;
    } else {
      hideError("jamKeberangkatan");
    }
  
    // Validasi Tujuan Keberangkatan (required)
    if (!tujuanKeberangkatan) {
      displayError("Tujuan Keberangkatan harus diisi.", "tujuanKeberangkatan");
      isValid = false;
    } else {
      hideError("tujuanKeberangkatan");
    }
  
    // Validasi Jumlah Tiket (required, bilangan bulat antara 1 – 10)
    if (!jumlahTiket || jumlahTiket < 1 || jumlahTiket > 10 || !Number.isInteger(Number(jumlahTiket))) {
      displayError("Jumlah Tiket harus diisi dengan angka bulat antara 1 - 10.", "jumlahTiket");
      isValid = false;
    } else {
      hideError("jumlahTiket");
    }
  
    // Jika semua validasi berhasil
    if (isValid) {
      displayResult(namaPelanggan, email, jamKeberangkatan, tujuanKeberangkatan, jumlahTiket);
    }
  }
  
  function displayError(message, inputId) {
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerText = message;
  
    var inputElement = document.getElementById(inputId);
    inputElement.style.borderColor = "red";
  }
  
  function hideError(inputId) {
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerText = "";
  
    var inputElement = document.getElementById(inputId);
    inputElement.style.borderColor = "";
  }
  
  function displayResult(namaPelanggan, email, jamKeberangkatan, tujuanKeberangkatan, jumlahTiket) {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `
      <h2>Hasil Formulir:</h2>
      <p><strong>Nama Pelanggan:</strong> ${namaPelanggan}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Jam Keberangkatan:</strong> ${jamKeberangkatan}</p>
      <p><strong>Tujuan Keberangkatan:</strong> ${tujuanKeberangkatan}</p>
      <p><strong>Jumlah Tiket:</strong> ${jumlahTiket}</p>
    `;
  
    resultElement.classList.remove("hidden");
  }
  