import React from 'react'
import InstaladorPDF from './instalador-ssp.pdf'

const Instalador = ({styles}) => {
  return (
    <a href={InstaladorPDF} download={'Instalador-ssp-pdf'} target='_blank' rel='noreferrer'>
      <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
        Descarga la guía para instalar
      </button>
    </a>
    
  )
}

export default Instalador