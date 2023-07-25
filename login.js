function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      document.getElementById("password-toggle-btn").innerHTML = '<i class="fa-sharp fa-regular fa-eye"></i>'; // Thay đổi biểu tượng khi hiển thị mật khẩu
    } else {
      passwordInput.type = "password";
      document.getElementById("password-toggle-btn").innerHTML = '<i class="fa-sharp fa-regular fa-eye-slash"></i>'; // Thay đổi biểu tượng khi ẩn mật khẩu
    }
  }
