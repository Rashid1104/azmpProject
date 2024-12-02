function login() {

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();


  if (email && password) {

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Welcome to Home page',
    }).then(() => {
      window.location.href = 'logo.html';
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error for login',
      text: 'untrue name or password',
    });
  }
}
    // const email = document.getElementById('loginEmail').value;
    // const password = document.getElementById('loginPassword').value;

    // const EmailLS = localStorage.getItem('email');
    // const PasswordLS = localStorage.getItem('password');

    // if (email === EmailLS && password === PasswordLS) {
    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Success',
    //     text: 'Welcome to Home page',
    //   }).then(() => {
    //     window.location.href = 'logo.html';
    //   })
    // } else {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error for login',
    //     text: 'untrue name or password',
    //   });
    // }
  }