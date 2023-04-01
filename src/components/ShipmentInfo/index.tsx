import React from 'react'
import { useSelector } from 'react-redux'
import InfoElement from '../kit-components/InfoElement'


export default function ShipmentInfo() {

  const {status,trackingNumber,latestUpdate,merchantName} = useSelector((state: any) => state.shipment);
  console.log(status)
  return (
    <div className=' divide-y border-[1px] border-[#EEEEEE] w-full '>
     <div className=' grid grid-cols-4 gap-4  p-6'>
     <InfoElement title={`shipment number ${trackingNumber}`} value={status}/>
      <InfoElement title='Latest update' value={latestUpdate} />
      <InfoElement title='Merchant name' value={merchantName} />
      <InfoElement title='Date' value="545-22" />
     </div>
     <div className='p-6'>
      Tracking stepper
     </div>
    </div>
  )
}
