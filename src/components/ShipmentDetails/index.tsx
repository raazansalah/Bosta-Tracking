
import { useSelector } from 'react-redux';

export default function ShipmentDetails() {
  const {trackEvents} = useSelector((state: any) => state.shipment);
  console.log(trackEvents)

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
    <div className='w-full border-[1px] border-[#EEEEEE] rounded-xl'>
      <header className='grid grid-cols-4 bg-[#FAFAFA] border-b-[1px] border-[#EEEEEE] text-[#8F9BB3] font-semibold p-6'>
        <p>Branch</p>
        <p>Date</p>
        <p>Time</p>
        <p>Details</p>
      </header>
      <div className='grid grid-cols-4 p-6 gap-y-6 text-sm'>
       {
        trackEvents.map((event:any) => (
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
