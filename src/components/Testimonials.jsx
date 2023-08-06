import { feedback } from "../constants"
import styles, { layout } from "../style"
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>INSCRÍBETE <br className="sm:block hidden"/>Y ÚNETE A NOSOTROS</h1>
        <div className="w-full md:mt-- mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Con nuestros paquetes tenemos los mejores precios, no arriesgues tu dinero! compra con nosotros 100% seguro.  Sí tienes dudas manda un mensaje de whatsapp al +52 811 466 2944. PREGUNTA POR NUESTRAS PROMOCIONES EXTRAS!!</p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        { feedback.map((card) => (
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )


export default Testimonials