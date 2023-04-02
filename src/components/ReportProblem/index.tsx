
import CustomButton from '../kit-components/CustomButton';
import Report from '../../assets/report.jpg'
import { useTranslation } from 'react-i18next';

function ReportProblem() {
  const {t}= useTranslation();

  return (
    <div className='flex items-center gap-8 border-[1px] border-[#EEEEEE] rounded-lg w-full p-6 mt-4'>
        <div >
          <img width={140} src={Report} alt='report'/>
        </div>
        <div className='w-full'>
          <p className='mb-4'>{t('PROBLEM_QUESTION')}</p>
          <CustomButton text={t('REPORT_BUTTON')} />
        </div>
    </div>
  )
}

export default ReportProblem;