import React from 'react';

const ProductImageUpload = ({ setThumbnail, setImages, imagePreview }) => {
  return (
    <div className="col-12 p-5 shadow-md rounded-md">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Thumbnail</label>
        <input type="file" accept="image/*" onChange={(e) => setThumbnail(e.target.files[0])} className="p-2 border rounded" />
        {imagePreview && <img src={imagePreview} alt="Thumbnail Preview" className="mt-2 w-32 h-32 object-cover" />}
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="font-semibold">Additional Images</label>
        <input type="file" accept="image/*" multiple onChange={(e) => setImages(Array.from(e.target.files))} className="p-2 border rounded" />
        {/* Optionally display previews for additional images */}
      </div>
    </div>
  );
};

export default ProductImageUpload;
