import {features} from '../constants'
import styles, {layout} from '../style'
import Instalador from './instalador'

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? 'mb/6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>QUÉ NECESITAS <br className='sm:block hidden'></br> PARA UNIRTE A NOSOTROS</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
        SKY SOCCER PLUS es una aplicación que se puede instalar en el sistema operativo Android. Aquí te decimos en que dispositivos se puede usar.
        </p>
        
        <Instalador styles='mt-10'></Instalador>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}></FeatureCard>
        ))}
      </div>
    </section>
  )




export default Business