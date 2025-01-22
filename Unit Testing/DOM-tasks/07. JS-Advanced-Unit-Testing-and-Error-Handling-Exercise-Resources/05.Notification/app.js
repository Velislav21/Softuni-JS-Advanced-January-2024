function notify(message) {
  let notification = document.getElementById('notification');
  notification.innerText = message;
  notification.style.display = 'block';

  notification.addEventListener('click', (event) => {
    event.currentTarget.style.display = 'none';
  });
}