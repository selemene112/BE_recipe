function isStrongPassword(password) {
  if (password.length <= 8) {
    return false; // Password terlalu pendek
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasSpecialChar = /[@.,!]/.test(password);

  if (!hasUpperCase || !hasLowerCase || !hasSpecialChar) {
    return false; // Password tidak memenuhi persyaratan
  }

  const charSet = new Set();
  for (const char of password) {
    if (charSet.has(char)) {
      return false; // Karakter sudah ada sebelumnya
    }
    charSet.add(char);
  }

  return true; // Password memenuhi syarat
}

const password = '@AkuSel23';
if (isStrongPassword(password)) {
  console.log('Password memenuhi syarat keamanan.');
} else {
  console.log('Password tidak memenuhi syarat keamanan.');
}
