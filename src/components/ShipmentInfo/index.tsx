
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'
import InfoElement from '../kit-components/InfoElement'
import TrackingStepper from '../TrackingStepper';


export default function ShipmentInfo() {

  const {status,trackingNumber,latestUpdate,merchantName,promisedDate,activeColor} = useSelector((state: any) => state.shipment);
  const { t } = useTranslation();
  return (
    <div className=' divide-y border-[1px] border-[#EEEEEE] rounded-lg w-full '>
     <div className=' grid grid-cols-1 gap-4  p-6 lg:grid-cols-4 md:grid-cols-4 '>
     <InfoElement title={`${t('SHIPMENT_NUMBER')} ${trackingNumber}`} value={status} activeColor={activeColor}/>
      <InfoElement title={t('LATEST')} value={latestUpdate} />
      <InfoElement title={t('MERCHANT_NAME')} value={merchantName} />
      <InfoElement title={t('DATE')} value={promisedDate} />
     </div>
     <div className='p-6 lg:block md:block hidden'>
     <TrackingStepper status={status}/>
     </div>
    </div>
  )
}
