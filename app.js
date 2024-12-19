const express = require('express');
const app = express();
app.get('/health', (req, res) => {
  console.log('POKEMON:::health::ok');
  res.send('ok');
});
app.get('/hola', (req, res) => {
  console.log('POKEMON:::hola::adios');
  res.send('adios');
});
// get the port from env variable
const PORT = process.env.PORT || 5000;
//const PORT = process.env.PORT || 4000;
app.use(express.static('dist'));


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
