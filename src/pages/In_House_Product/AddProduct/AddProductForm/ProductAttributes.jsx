import React from 'react';

const ProductAttributes = ({ attributes, selectedAttribute, handleAttributeChange, addAttribute, productAttributes, setProductAttributes }) => (
  <div>
    <select value={selectedAttribute} onChange={handleAttributeChange}>
      <option value="">Select Attribute</option>
      {attributes.map(attr => (
        <option key={attr._id} value={attr._id}>{attr.name}</option>
      ))}
    </select>
    <button type="button" onClick={addAttribute}>Add Attribute</button>
    <ul>
      {productAttributes.map(attr => (
        <li key={attr._id}>
          {attr.name}
          <button type="button" onClick={() => setProductAttributes(prev => prev.filter(a => a._id !== attr._id))}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductAttributes;
