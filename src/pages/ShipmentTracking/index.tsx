import React from 'react'
import AddressInfo from '../../components/AddressInfo'
import CustomButton from '../../components/kit-components/CustomButton'
import ReportProblem from '../../components/ReportProblem'
import ShipmentDetails from '../../components/ShipmentDetails'
import ShipmentInfo from '../../components/ShipmentInfo'

export default function ShipmentTracking() {
  return (
    <div className='flex justify-center flex-col items-center '>
        <ShipmentInfo />
        <div className='grid grid-flow-row-dense grid-cols-3 gap-12 w-full mt-8'>
            <div className='col-span-3  lg:col-span-2'>
              <p className='mb-6 text-lg'>Shipment Details</p>
              <ShipmentDetails />

            </div>
            <div className='col-span-3 lg:col-span-1'>
              <p className='mb-6 text-lg'>Shipment Address</p>
              <AddressInfo />
              <ReportProblem />
              
            </div>
        </div>
    </div>
  )
}
