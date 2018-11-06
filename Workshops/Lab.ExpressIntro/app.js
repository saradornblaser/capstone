const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <html>
    <head>
      <title>Puppies and Kittens Site</title>
    </head>
    <body>
    <h1>
    Puppies and Kittens Galore
    </h1>
    <img src="https://wallpapercave.com/wp/dsx1Z9r.jpg" width=700px>
    </body>
    </html>
  `);
});

app.get('/kittens', (req, res) => {
  res.send(`
  <html>
    <head>
      <title>Puppies and Kittens Site</title>
    </head>
    <body>
    <h1>
    Kittens!!!
    </h1>
    <img src="https://www.thesprucepets.com/thmb/dp-HvVRuM14H32PRu9FQmoDDMK0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kitten-looking-at-camera-521981437-57d840213df78c583374be3b.jpg" width = 700px>
    </body>
    </html>
  `);
});

app.get('/puppies', (req, res) => {
  res.send(`
  <html>
    <head>
      <title>Puppies and Kittens Site</title>
    </head>
    <body>
    <h1>
    Puppies!!!
    </h1>
    <img src="https://agri.ohio.gov/wps/wcm/connect/gov/2049f01b-0952-4808-be75-2c2637d58118/Canine2.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_M1HGGIK0N0JO00QO9DDDDM3000-2049f01b-0952-4808-be75-2c2637d58118-mi7LBo7" width = 700px>
    </body>
    </html>
  `);
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
