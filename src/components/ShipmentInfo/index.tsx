import React from 'react'
import InfoElement from '../kit-components/InfoElement'


export default function ShipmentInfo() {
  return (
    <div className=' divide-y border-[1px] border-[#EEEEEE] w-full '>
     <div className=' grid grid-cols-4 gap-4  p-6'>
     <InfoElement title='Shipment Number 5455454' value="545-22" />
      <InfoElement title='Latest update' value="545-22" />
      <InfoElement title='Merchant name' value="Souq.com" />
      <InfoElement title='Date' value="545-22" />
     </div>
     <div className='p-6'>
      Tracking stepper
     </div>
    </div>
  )
}
