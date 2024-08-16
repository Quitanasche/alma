fetch('https://api.example.com/data')
  .then(response => response.text())
  .then(data => {
    console.log(data); // The response data as a string
  });
