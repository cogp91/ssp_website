import {quotes} from '../assets'
import ButtonPay from './ButtonPay'
import ButtonPay3M from './ButtonPay3M'
import ButtonPay6M from './ButtonPay6M'

const FeedbackCard = ({content, name, title, img}) =>  (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr0 my-5 feedback-card'>
      <img src={quotes} alt="double_quotes" className='w-[42px] h-[27px] object-contain'/>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
      
      <div className='flex flex-row'>
        {name === "1 Mes" && <ButtonPay styles='mt-10'></ButtonPay>}
        {name === "3 Meses" && <ButtonPay3M styles='mt-10'></ButtonPay3M>}
        {name === "6 Meses" && <ButtonPay6M styles='mt-10'></ButtonPay6M>}
      </div>

    </div>
  )


export default FeedbackCard