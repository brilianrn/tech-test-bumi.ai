const express = require('express');
const PhotoController = require('../controllers/photoController');
const router = express.Router();

router.get('/', PhotoController.getAllPhotos);
router.get('/:id', PhotoController.getOnePhoto);
router.get('/sorting-by/:albumId', PhotoController.getByAlbumId);

module.exports = router;