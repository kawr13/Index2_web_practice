async function sendEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      alert('Введите ваш email');
      return;
    } 
    if (!emailRegex.test(email)) {
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      alert('Некорректный email-адрес');
      return;
    } 
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
    const successMessage = `Email успешно отправлен на ${email}!`;
    console.log(successMessage);
    alert(successMessage);
  }
  