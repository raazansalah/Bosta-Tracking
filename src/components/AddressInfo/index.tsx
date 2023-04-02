
import { useTranslation } from 'react-i18next'

function AddressInfo() {

  const {t} = useTranslation()

  return (
    <div className=' rounded-lg bg-[#FBFBFB] border-[1px] border-[#EEEEEE] w-full p-6'>
        <p className='text-[#4B566F]'>{t('ADDRESS')}</p>
    </div>
  )
}

export default AddressInfo