const express = require('express');
const multer = require('multer');
const router = express.Router(); // Create a router instance instead of an app instance

// Configure multer to specify where to store uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Handle potential errors while setting the destination
    try {
      // Your destination logic here
      cb(null, 'routes/uploads'); // Files will be stored in the 'uploads' directory
    } catch (err) {
      cb(err, null);
    }
  },
  filename: (req, file, cb) => {
    // console.log(req);
    // console.log(file);
    // Handle potential errors while setting the filename
    try {
      const newName = `${req.body.fileName}-${file.originalname}`;
      // Your filename logic here
      // cb(null, file.originalname); // Use the original file name
      cb(null, newName); // Use the new name
    } catch (err) {
      cb(err, null);
    }
  },
});

const upload = multer({ storage: storage });

// Define a route for file uploads
router.post('/', upload.single('file'), (req, res) => {
  console.log("upload post");
  // console.log(req);
  console.log(req.file);
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  res.status(200).send('File uploaded successfully.');
});

module.exports = router; // Export the router for use in index.js
