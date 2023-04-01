import { createSlice } from '@reduxjs/toolkit';

export const shipmentSlice = createSlice({
    name: 'shipment',
    initialState: {
    },
    reducers: {
        addShipment: (state, action) => {
        console.log(action.payload,state)
        return action.payload;
      }
    },
  });
  
  export const { addShipment} = shipmentSlice.actions;
  
  export default shipmentSlice.reducer;