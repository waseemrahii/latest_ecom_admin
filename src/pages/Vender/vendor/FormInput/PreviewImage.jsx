import React from 'react';

const PreviewImage = ({ image, altText }) => (
  <div className="form-group">
    <div className="d-flex justify-content-center">
      <img
        className="upload-img-view"
        src={image ? URL.createObjectURL(image) : 'https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'}
        alt={altText}
      />
    </div>
  </div>
);

export default PreviewImage;
