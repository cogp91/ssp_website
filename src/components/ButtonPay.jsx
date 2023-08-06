import React from 'react'

const ButtonPay = ({styles}) => {
  return (
    <a href="https://buy.stripe.com/7sI6os0ed5f72GYdQQ">
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
         Compra 1 Mes
      </button>
    </a>
    
  )
}

export default ButtonPay

