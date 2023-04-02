
import { useTranslation } from 'react-i18next'
interface InfoElementProps{
    title:string;
    value:string
}

export default function InfoElement(props:InfoElementProps) {
    const{title,value} =props;
    const { t } = useTranslation();

  return (
    <div >
     <p className='text-[#CBCBCB] font-semibold text-base mb-4'>{title}</p>
     <p className="font-semibold text-base">{t(value)}</p>
   </div>
  )
}
