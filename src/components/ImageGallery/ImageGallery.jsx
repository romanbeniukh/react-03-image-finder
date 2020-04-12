import React from 'react';
import T from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ pictures, getBigPicture }) => (
  <ul className="image-gallery">
    {pictures.map(picture => (
      <li className="image-gallery__item"
          onClick={ getBigPicture }
          id={ picture.id }
          key={ picture.id }
      >
        <ImageGalleryItem picture={ picture }/>
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  pictures: T.array.isRequired,
  getBigPicture: T.func.isRequired,
};

export default ImageGallery;