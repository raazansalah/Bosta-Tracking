
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'
import InfoElement from '../kit-components/InfoElement'
import TrackingStepper from '../TrackingStepper';


export default function ShipmentInfo() {

  const {status,trackingNumber,latestUpdate,merchantName,promisedDate} = useSelector((state: any) => state.shipment);
  const { t } = useTranslation();
  return (
    <div className=' divide-y border-[1px] border-[#EEEEEE] rounded-lg w-full '>
     <div className=' grid grid-cols-4 gap-4  p-6'>
     <InfoElement title={`${t('SHIPMENT_NUMBER')} ${trackingNumber}`} value={status}/>
      <InfoElement title={t('LATEST')} value={latestUpdate} />
      <InfoElement title={t('MERCHANT_NAME')} value={merchantName} />
      <InfoElement title={t('DATE')} value={promisedDate} />
     </div>
     <div className='p-6'>
     <TrackingStepper status={status}/>
     </div>
    </div>
  )
}
