const nodemailer = require('nodemailer');

async function sendEmail() {
  // Получение значения email из поля ввода
  const email = document.getElementById('email').value;

  // Проверка введенного email на валидность
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

    // Создание транспортера
    const transporter = nodemailer.createTransport({
      host: 'smtp.rambler.ru',
      port: 465,
      secure: true,
      auth: {
        user: "kawrkawr13@rambler.ru",
        pass: "Kawrkawr4754"
      }
    });

    // Определение параметров для отправки email
    const mailOptions = {
      from: 'ВАШ_EMAIL',
      to: email,
      subject: 'Тестовое сообщение',
      text: 'Привет, это тестовое сообщение!'
    };

    // Отправка email
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.error('Ошибка при отправке email:', error);
        alert('Ошибка при отправке email');
      } else {
        console.log('Email успешно отправлен!', info);
        alert('Email успешно отправлен!');
      }
    });
  }
}