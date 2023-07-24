document.getElementById('proxy-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const url = document.getElementById('url-input').value;
  if (!url) return;

  try {
    const response = await fetch('/proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    document.getElementById('response-container').textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error occurred:', error);
    document.getElementById('response-container').textContent = 'An error occurred. Please try again.';
  }
});
