const login = document.querySelector('#login');
const signup = document.querySelector('#signup');
const loginForm = document.querySelector('.login__form');
const signupForm = document.querySelector('.signup__form');
const inputsLL = document.querySelectorAll('input.ll');
const inputsTT = document.querySelectorAll('input.tt');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const nameInput = document.querySelector('#input-name');
const fNameError = document.querySelector('.fNameError');
const lastNameInput = document.querySelector('#input-lastname');
const lNameError = document.querySelector('.lNameError')
const visibilityLoginPassword = document.querySelector('.fa-eye');
const visibilitySignUpPassword1 = document.querySelector('#visibility1');
const visibilitySignUpPassword2 = document.querySelector('#visibility2');
const checkbox = document.querySelector('#checkbox');
const password = document.querySelector('#password-input');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email-input');
const email2 = document.querySelector('#email-input-signup');

button2.disabled = true;
// Login Page

email.addEventListener('input', (e) => {
  const emailContainer = document.querySelector('#email__container');

  if (e.target.value === '') {
    if ( !(emailContainer.childNodes[3])) {
      const error = document.createElement('p');
      error.textContent = 'Bu alan boş bırakılamaz.';
      emailContainer.appendChild(error);
      email.style.border = '1px solid red';
    }
  }
  else {
    if (emailContainer.children[1]) {
      emailContainer.removeChild(emailContainer.children[1]);
      email.style.border = 'none';
    }
  }
})

password.addEventListener('input', (e) => {
  const passwordContainer = document.querySelector('#password__container');
  if (e.target.value === '') {
    if ( !(passwordContainer.childNodes[5])) {
      console.log('here');
      const error = document.createElement('p');
      error.textContent = 'Bu alan boş bırakılamaz.';
      passwordContainer.appendChild(error);
      password.style.border = '1px solid red';
    }
  }
  else {
    if (passwordContainer.children[2]) {
      passwordContainer.removeChild(passwordContainer.children[2]);
      password.style.border = 'none';
    }
  }
})

loginForm.addEventListener('submit', (e) => {
  const email = document.querySelector('#email-input');
  const password = document.querySelector('#password-input');

  if (email.classList.contains('invalid')) {
    alert('Geçersiz e-posta');
    e.preventDefault();
  } else if (password.classList.contains('invalid')) {
    alert('Geçersiz şifre, lütfen en az 8 karakterden oluşan bir şifre giriniz')
    e.preventDefault();
  }
})

// Sign Up Form

// Name length and regex check
nameInput.addEventListener('input', (e) => {
  const name = e.target.value;
  const reg = /^[a-zA-Z0-9]{3,24}$/;

  if ( !reg.test(name)) {
    nameInput.classList.remove('valid')
    nameInput.classList.add('invalid');
    nameInput.style.border = '1px solid red';
  } else {
    nameInput.classList.remove('invalid')
    nameInput.classList.add('valid');
    nameInput.style.border = 'none';
  }
})

// Error for fname
fNameError.addEventListener('input', (e) => {
  const nameContainer = document.querySelector('.name__container');

  if (e.target.value === '') {
    if ( !(nameContainer.childNodes[3])) {
      const error = document.createElement('span');
      error.textContent = 'Bu alanlar boş bırakılamaz!';
      nameContainer.appendChild(error);
    }
  }
  else {
    if (nameContainer.children[1]) {
      nameContainer.removeChild(nameContainer.children[1]);
    }
  }
})

// Last Name length and regex check
lastNameInput.addEventListener('input', (e) => {
  const lastName = e.target.value;
  const reg = /^[a-zA-Z0-9]{3,24}$/;

  if ( !reg.test(lastName) ) {
    lastNameInput.classList.remove('valid')
    lastNameInput.classList.add('invalid');
    lastNameInput.style.border = '1px solid red';
  } else {
    lastNameInput.classList.remove('invalid');
    lastNameInput.classList.add('valid');
    lastNameInput.style.border = 'none';
  }
})

// Error for lname
lNameError.addEventListener('input', (e) => {
  const lastname__container = document.querySelector('.lastname__container');

  if (e.target.value === '') {
    if ( !(lastname__container.childNodes[3])) {
      const error = document.createElement('span');
      error.textContent = 'Bu alanlar boş bırakılamaz!';
      lastname__container.appendChild(error);
    }
  }
  else {
    if (lastname__container.children[1]) {
      lastname__container.removeChild(lastname__container.children[1]);
    }
  }
})

// Error for email
email2.addEventListener('input', (e) => {
  const emailContainer = document.querySelector('.email__container--signup');

  if (e.target.value === '') {
    if ( !(emailContainer.childNodes[3])) {
      const error = document.createElement('p');
      error.textContent = 'Bu alanlar boş bırakılamaz!';
      error.style.color = 'red'
      emailContainer.appendChild(error);
    }
  }
  else {
    if (emailContainer.children[1]) {
      emailContainer.removeChild(emailContainer.children[1]);
    }
  }
})

// Error for password
password1.addEventListener('input', (e) => {
  const passwordContainer = document.querySelector('.pwdOne');

  if (e.target.value === '') {
    if ( !(passwordContainer.childNodes[5])) {
      const error = document.createElement('p');
      error.textContent = 'Bu alanlar boş bırakılamaz!';
      error.style.color = 'red'
      passwordContainer.appendChild(error);
    }
  }
  else {
    if (passwordContainer.children[2]) {
      passwordContainer.removeChild(passwordContainer.children[2]);
    }
  }
})

// Password Match Check
password2.addEventListener('input', (e) => {
  const password1 = document.querySelector('#password1');
  const warning = document.querySelector('.warning');

  if ( !(e.target.value === password1.value)) {
    if ( !(warning.childNodes[5])) {
      const p = document.createElement('p');
      p.textContent = 'Şifreler birbiriyle uyuşmamaktadır.'
      p.style.fontSize = '.8rem';
      p.style.color = 'red';
      warning.appendChild(p);
  
      password1.style.border = '1px solid red';
      password2.style.border = '1px solid red';
    }
  } 
  else {

    warning.removeChild(warning.childNodes[5]);
    password1.style.border = 'none';
    password2.style.border = 'none';
  }
})
// Checkbox
checkbox.addEventListener('click', (e) => {
  if (e.target.checked) {
    checkbox.classList.remove('invalid');
    checkbox.classList.add('valid');

    if (checkbox.classList.contains('valid') && document.querySelectorAll("input.tt.invalid").length == 0) {
      button2.disabled = false
    } else {
      button2.disabled = true
    }

  } else {
    console.log('here');
    checkbox.classList.remove('valid');
    checkbox.classList.add('invalid');
    if (checkbox.classList.contains('invalid') || !document.querySelectorAll("input.tt.invalid").length == 0) {
      button2.disabled = true;
    }
  }
})

// ------------------------------ //

// Regex values
const regexs = {
  fname: /^[a-zA-Z0-9]{3,24}$/,
  lname: /^[a-zA-Z0-9]{3,24}$/,  
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/, 
  password: /^[\w@-]{8,20}$/ // şifre en az 8 karakter olmalıdır.
};

// Regex Validation
const validation = (input, regex) => {
  if (regex.test(input.value)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}

inputsLL.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validation(e.target,regexs[e.target.attributes.name.value])
  })
})

inputsTT.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validation(e.target,regexs[e.target.attributes.name.value])
    button2.disabled = !document.querySelectorAll("input.invalid").length == 0;
  })
})

// Changing Giris Yap and Uye Ol toggles
login.addEventListener('click', () => {
  login.style.backgroundColor = 'white';
  signup.style.backgroundColor = '#ededed';
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
})

signup.addEventListener('click', () => {
  signup.style.backgroundColor = 'white';
  login.style.backgroundColor = '#ededed';
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
})

// Changing visibility of passwords
visibilityLoginPassword.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
})

visibilitySignUpPassword1.addEventListener('click', () => {
  if (password1.type === 'password') {
    password1.type = 'text';
  } else {
    password1.type = 'password';
  }
})

visibilitySignUpPassword2.addEventListener('click', () => {
  if (password2.type === 'password') {
    password2.type = 'text';
  } else {
    password2.type = 'password';
  }
})