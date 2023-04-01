import axios from 'axios';

export const trackShipment =  (
    trackingNumber:string
  ) => {
    return axios
      .get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
      .then((res) => res)
      .catch((err) => err?.response);
  };
