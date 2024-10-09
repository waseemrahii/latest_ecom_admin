// src/services/apiService.js
import axios from 'axios';
import ApiUrl from '../../ApiUrl';

const fetchCategories = async () => {
  try {
    const response = await axios.get(`${ApiUrl}categories/`);
    return response.data.docs;
  } catch (error) {
    throw new Error('Error fetching categories');
  }
};

const addCategory = async (formData) => {
  try {
    const response = await axios.post(`${ApiUrl}categories/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error adding category');
  }
};

const deleteCategory = async (categoryId) => {
  try {
    await axios.delete(`${ApiUrl}categories/${categoryId}`);
  } catch (error) {
    throw new Error('Error deleting category');
  }
};

export { fetchCategories, addCategory, deleteCategory };
