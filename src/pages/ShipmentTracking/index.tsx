import { useTranslation } from 'react-i18next'
import AddressInfo from '../../components/AddressInfo'
import ReportProblem from '../../components/ReportProblem'
import ShipmentDetails from '../../components/ShipmentDetails'
import ShipmentInfo from '../../components/ShipmentInfo'

export default function ShipmentTracking() {
  const {t} = useTranslation()
  return (
    <div className='flex justify-center flex-col items-center '>
        <ShipmentInfo />
        <div className='grid grid-flow-row-dense grid-cols-3 gap-12 w-full mt-8'>
            <div className='col-span-3  lg:col-span-2'>
              <p className='mb-6 text-lg'>{t('SHIPMENT_DETAILS')}</p>
              <ShipmentDetails />

            </div>
            <div className='col-span-3 lg:col-span-1'>
              <p className='mb-6 text-lg'>{t('SHIPMENT_ADDRESS')}</p>
              <AddressInfo />
              <ReportProblem />
              
            </div>
        </div>
    </div>
  )
}
