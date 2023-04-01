import React from 'react'
import AddressInfo from '../../components/AddressInfo'
import CustomButton from '../../components/kit-components/CustomButton'
import ReportProblem from '../../components/ReportProblem'
import ShipmentInfo from '../../components/ShipmentInfo'

export default function ShipmentTracking() {
  return (
    <div className='flex justify-center flex-col items-center '>
        <ShipmentInfo />
        <div className='grid grid-flow-row-dense grid-cols-3 gap-6 w-full mt-8'>
            <div className='col-span-2'>
              <p>Shipment Details</p>

            </div>
            <div className='col-span-1'>
              <p>Shipment Address</p>
              <AddressInfo />
              <ReportProblem />
              
            </div>
        </div>
    </div>
  )
}
