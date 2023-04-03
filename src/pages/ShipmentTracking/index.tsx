import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AddressInfo from '../../components/AddressInfo'
import ReportProblem from '../../components/ReportProblem'
import ShipmentDetails from '../../components/ShipmentDetails'
import ShipmentInfo from '../../components/ShipmentInfo'

export default function ShipmentTracking() {
  const {t} = useTranslation()
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState('ltr')

  function changeLanguage(e:any) {
    i18n.changeLanguage(e.target.value);
    if(e.target.value === 'ar'){
      setDirection('rtl')
    }else{
      setDirection('ltr')
    }
  }

  return (
    <div className='flex justify-center flex-col items-center ' dir={direction}>
      <div>
      <select onChange={changeLanguage}>
        <option value="ar">AR</option>
        <option value="en">EN</option>
      </select>

      </div>
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
