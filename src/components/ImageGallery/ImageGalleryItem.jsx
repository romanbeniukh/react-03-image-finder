import React from 'react';
import T from 'prop-types';

const ImageGalleryItem = ({ picture }) => (
  <>
    <img data-src={picture.largeImageURL} src={picture.webformatURL} alt={picture.id} className="image-gallery__img" />
  </>
);

ImageGalleryItem.propTypes = {
  picture: T.shape({
    largeImageURL: T.string.isRequired,
    webformatURL: T.string.isRequired,
    id: T.number.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
