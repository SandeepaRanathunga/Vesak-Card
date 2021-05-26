document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('.form_container').style.display = 'none';
  const sender = document.getElementById('sender').value;
  const receiver = document.getElementById('receiver').value;
  document.querySelector('.action_container').style.display = 'flex';
});
