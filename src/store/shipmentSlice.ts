import { createSlice } from '@reduxjs/toolkit';

export const shipmentSlice = createSlice({
    name: 'shipment',
    initialState: {
        status:''
    },
    reducers: {
        addShipment: (state, action) => {
        console.log(action.payload,state)
        state.status = action.payload
      }
    },
  });
  
  export const { addShipment} = shipmentSlice.actions;
  
  export default shipmentSlice.reducer;