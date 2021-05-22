const { Photo } = require('../models');

class PhotoController {
  static getAllPhotos(req, res, next) {
    Photo.findAll()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      })
  }

  static getOnePhoto(req, res, next) {
    const id = +req.params.id;

    Photo.findOne({
      where: { id }
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      })
  }

  static getByAlbumId(req, res, next) {
    const albumId = req.query
    console.log(albumId)
  }
}

module.exports = PhotoController;