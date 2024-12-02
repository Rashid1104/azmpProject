function register() {

  const email = document.getElementById('InputEmail1').value.trim();
  const password = document.getElementById('InputPassword1').value.trim();


  if (email && password) {

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      Swal.fire({
        icon: 'error',
        title: 'Email Already Registered',
        text: 'This email is already registered. Please use a different email or log in.',
      });
      return;
    }

    const newUser = { email, password };
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    Swal.fire({
      icon: 'success',
      title: 'Registration Successful',
      text: 'You have successfully signed up!',
    }).then(() => {
  
      window.location.href = 'login.html';
    });
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Incomplete Fields',
      text: 'Please fill in all fields before signing up.',
      confirmButtonText: 'OK',
    });
  }
}
