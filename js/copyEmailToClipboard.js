const copyButton = document.querySelector('[data-js="copy-button"]');
const email = document.querySelector('[data-js="email-p"]').textContent;

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(email);

  alert('Email copiado com sucesso!');
});
