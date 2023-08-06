import React from 'react'

const ButtonPay3M = ({styles}) => {
  return (
    <a href="https://buy.stripe.com/28o4gkbWV9vnepG8wy">
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
         Compra 3 Meses
      </button>
    </a>
    
  )
}

export default ButtonPay3M