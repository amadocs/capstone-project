function SendMail() {
  var params = {
    from_name: document.getElementById('fname').value,
    email_id: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  emailjs
    .send('service_6vltxmk', 'template_jn0eupg', params)
    .then(function (res) {
      alert('Success' + res.status);
    });
}
