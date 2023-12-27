function sendMessage() {
    // Ambil nilai pesan yang dimasukkan oleh pengguna
    var messageInput = document.getElementById("message-input");
    var messageText = messageInput.value;
  
    if (messageText.trim() !== "") {
      // Buat elemen untuk menampilkan pesan
      var messageElement = document.createElement("div");
      messageElement.className = "message";
      messageElement.innerText = messageText;
  
      // Tambahkan pesan ke dalam kotak pesan
      var chatMessages = document.getElementById("chat-messages");
      chatMessages.appendChild(messageElement);
  
      // Bersihkan input setelah mengirim pesan
      messageInput.value = "";
  
      // Otomatis scroll ke bawah setiap kali ada pesan baru
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
  