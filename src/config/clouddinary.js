const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dkucquakt',
  api_key: '783225448489446',
  api_secret: 'P9lUt9Hja7ezbFl5loOZd9mC1V0',
});

module.exports = cloudinary;
