import React from 'react'

const ButtonPay6M = ({styles}) => {
  return (
    <a href="https://buy.stripe.com/6oE4gk5yx9vn2GYdQU">
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
         Compra 6 Meses
      </button>
    </a>
    
  )
}

export default ButtonPay6M