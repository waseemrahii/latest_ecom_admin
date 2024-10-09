import React from 'react';

const ProductColors = ({ colors, selectedColors, handleColorChange }) => (
  <div>
    <h3>Select Colors</h3>
    {colors.map(color => (
      <label key={color._id}>
        <input
          type="checkbox"
          checked={selectedColors.includes(color._id)}
          onChange={() => handleColorChange(color._id)}
        />
        {color.name}
      </label>
    ))}
  </div>
);

export default ProductColors;
