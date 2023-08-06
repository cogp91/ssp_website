import styles from "../style"
import ButtonP from "./Prueba"

const CTA = () =>  (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>
          Prueba nuestro servicio ahora!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Mandanos mensaje por WhatsApp o Instagram y pide tu prueba gratis de la aplicación! (por tiempo límitado). Sí tienes una duda no dudes en preguntarnos!
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <ButtonP></ButtonP>
      </div>
    </section>
  )


export default CTA