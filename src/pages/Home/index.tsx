import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar'
import { trackShipment } from '../../services/trackingService'
import { addShipment } from '../../store/shipmentSlice';

function Home() {

    const [errorMessage, setErrorMessage] = useState('');
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const getActiveColor =(status:string)=>{
      console.log(status)
        switch (status) {
          
            case 'DELIVERED':
              return 'text-[#5AB824]';
            case 'CANCELLED':
                return 'text-[#F24423]';
            default:
              return 'text-[#F9BA33]';
    }
    }
    const handleTracking =async (trackingNumber:string)=>{

        const res = await trackShipment(trackingNumber) 
        if(res.status === 200){
            setErrorMessage('')
            const date = new Date(res.data.CurrentStatus.timestamp);
            const promisedDate = new Date(res.data.PromisedDate);
            dispatch(addShipment({
              status:res.data.CurrentStatus.state,
              trackingNumber:res.data.TrackingNumber,
              merchantName:res.data.provider,
              latestUpdate:date.toDateString(),
              promisedDate:promisedDate.toDateString(),
              trackEvents: res.data.TransitEvents,
              activeColor:getActiveColor(res.data.CurrentStatus.state)
            }))
            navigate(`/tracking-shipments/${trackingNumber}`)    

        }else{
            setErrorMessage('No record of this tracking number can be found at this time, please check the number and try again later. For further assistance, please contact Customer Service.')
        }
    }

  return (
    <div className='flex flex-col justify-center items-center h-full '>
        <h4 className='text-4xl mb-8 font-medium'>Track your shipment</h4>
        <SearchBar  onSubmit={handleTracking}/>
       {errorMessage &&
         <p className='w-1/2 bg-[#FEF3F2] text-sm border-[#FACDCA] border-[1px] p-4 my-24'>{errorMessage}</p>
        }
    </div>
  )
}

export default Home


