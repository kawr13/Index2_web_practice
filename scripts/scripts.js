async function sendEmail() {
    const email = document.getElementById('email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      alert('Введите ваш email');
    } else if (!regex.test(email)) {
      document.getElementById('email').classList.add('invalid');
      document.getElementById('email').classList.remove('valid');
      alert('Некорректный email-адрес');
    } else {
      document.getElementById('email').classList.remove('invalid');
      document.getElementById('email').classList.add('valid');
      const successMessage = `Email успешно отправлен на ${email}!`;
      console.log(successMessage);
      alert(successMessage);
    }
  }
  