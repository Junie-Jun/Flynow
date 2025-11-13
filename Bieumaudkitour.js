document.getElementById('tourForm').addEventListener('submit', function(e) {
  const emailInput = document.getElementById('emailInput');
  const emailError = document.getElementById('emailError');
  const emailValue = emailInput.value.trim();

  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!gmailRegex.test(emailValue)) {
    e.preventDefault(); 
    emailError.textContent = "⚠️ Email không hợp lệ. Vui lòng nhập đúng định dạng @gmail.com";
    emailInput.focus();
  } else {
    emailError.textContent = "";
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.");
    window.location.href = "cam-on.html"; 
  }
});
