
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function ShipmentDetails() {
  const {trackEvents} = useSelector((state: any) => state.shipment);
  const {t} = useTranslation()

  const getDate=(timestamp:string)=>{
    const date= new Date(timestamp)
    const formattedDate = `${date.getUTCDate()}-${date.getUTCMonth() + 1}-${date.getUTCFullYear()}`;
    return formattedDate
  }
  const getTime =(timeStamp:any)=>{
      const date= new Date(timeStamp)
      let hours = date.getUTCHours();
      hours %= 12;
      hours = hours || 12; // convert 0 to 12
      const minutes = date.getUTCMinutes();
      const timeType = hours >=12? 'pm':'am' 
      const formattedTime = `${hours}:${minutes} ${timeType}`;
      return formattedTime
  }
  return (
    <div className='w-full border-[1px] border-[#EEEEEE] rounded-xl overflow-x-auto'>
      <header className='grid grid-cols-4 gap-6 bg-[#FAFAFA]  w-full border-b-[1px] border-[#EEEEEE] text-[#8F9BB3] font-semibold p-6 sm:gap-x-12'>
        <p>{t('BRANCH')}</p>
        <p>{t('TABLE_DATE')}</p>
        <p>{t('TABLE_TIME')}</p>
        <p>{t('TABLE_DETAILS')}</p>
      </header>
      <div className='grid grid-cols-4 p-6 gap-6 text-sm w-full ' >
       {
        trackEvents && trackEvents.map((event:any) => (
          <>
          <p>{event?.hub}</p>
          <p>{getDate(event?.timestamp)}</p>
          <p>{getTime(event?.timestamp)}</p>
          <p>{event?.state}</p>
          </>
      ))
    
       }
        
      </div>
    </div>
  )
}
