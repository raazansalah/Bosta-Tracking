import { configureStore } from '@reduxjs/toolkit';
import shipmentSlice from './shipmentSlice';
export const store = configureStore({
    reducer: {
      shipment:shipmentSlice
    },
  });


