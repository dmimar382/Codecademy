require('dotenv').config();

const express = require('express');
const app = express();

// Serve images from the 'images' directory
app.use('/images', express.static('images'));

// Other routes and server configurations...

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
