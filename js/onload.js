window.onload = () => {
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const sender = urlParams.get('sender');
  const receiver = urlParams.get('receiver');
  document.getElementById('from').value = sender;
  document.getElementById('to').value = receiver;
};
