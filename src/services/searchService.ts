import axios from 'axios';

export const trackShipment = async (
    trackingNumber:string
  ) => {
    return axios
      .get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
      .then((res) => res.data.api_response)
      .catch((err) => err?.response);
  };
