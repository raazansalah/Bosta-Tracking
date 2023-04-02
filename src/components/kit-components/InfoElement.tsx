
interface InfoElementProps{
    title:string;
    value:string
}

export default function InfoElement(props:InfoElementProps) {
    const{title,value} =props;

  return (
   <div>
     <p className='text-[#CBCBCB] font-semibold text-base mb-4'>{title}</p>
     <p className="font-semibold text-base">{value}</p>
   </div>
  )
}
