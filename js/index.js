document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('.form_container').style.display = 'none';
  const sender = document.getElementById('sender').value;
  const receiver = document.getElementById('receiver').value;
  const view_link = `https://vesak-card.herokuapp.com/view_card.html?sender=${sender}&receiver=${receiver}`;
  document.getElementById('link').value = view_link;
  document.getElementById('show_card').href = view_link;
  document.getElementById(
    'whatsapp'
  ).href = `whatsapp://send?text=${view_link}`;
  document.querySelector('.action_container').style.display = 'flex';
});

document.getElementById('link_copy').addEventListener('click', () => {
  const link = document.getElementById('link');
  link.style.display = 'block';
  link.select();
  // link.setSelectionRange(0, 99999);
  document.execCommand('copy');
  link.style.display = 'none';
  alert(link.value);
});
