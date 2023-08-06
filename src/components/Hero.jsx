import styles from '../style'
import {discount, robot} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* left side of hero */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt='discount' className='w-[32px] h-[32px]'></img>
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>10%</span> DE DESCUENTO POR {" "}
          <span className='text-white'>1 MES</span> DE SUSCRIPCION
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'> 
          TODO EL <br className='sm:block hidden'></br> {" "}
          <span className='text-gradient'>STREAMING</span> {" "}
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted></GetStarted>
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        QUE NECESITAS.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Descubre una nueva forma de disfrutar del streaming, ya no pagues de más al tener varios servicios de streaming, ahorra hoy con Sky Soccer Plus con un sólo pago al mes tendrás todas las plataformas! y lo mejor de todo a un super precio!</p>
    </div>
    {/* right side of hero */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="robot" className='w-[100%] h-[100%] relative z-[5]'/>
      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted></GetStarted>
    </div>
  </section>
)

export default Hero