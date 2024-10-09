import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import orderReducer from './orderSlice';
import categoryReducer from './categorybrandSlice';
import refundReducer from './refundSlice';
import vendorReducer from './vendorSlice'; 
import brandReducer from './brandSlice'; 
import productCategorySlice from './categorySlice'; 
import productSubcategoryReducer from './subCategorySlice'; 
import bannerReducer from './bannerSlice'; 
import dealOfTheDayReducer from './dealOfDaySlice'; 
import FeatureDealReducer from './featureDealSlice'; 
import customersReducer from './customerSlice'; 
import couponReducer from './couponSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    vendorOrder: orderReducer,
    category: categoryReducer,
    refund: refundReducer,
    vendor: vendorReducer,
    brand: brandReducer,
    productCategory: productCategorySlice,
    productSubcategory: productSubcategoryReducer,
    banner: bannerReducer,
    dealOfTheDay: dealOfTheDayReducer,
    featureDeal: FeatureDealReducer,
    customers: customersReducer,
    coupons: couponReducer, // Add the coupon reducer here

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable state invariant middleware
    }),
});

export default store;
