import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>VE NUESTRA CARTELERA <br className='sm:block hidden'/> DE PELICULAS Y SERIES</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Disfruta de nuestra gran amplia cartelera de películas que van saliendo del cine, de streaming o de las películas que ya no estan en ninguna plataforma, así como también de nuestro gran catálogo de series que tenemos, que se actualizan cada semana con los capítulos nuevos. </p>
        <Button styles='mt-10'></Button>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )


export default CardDeal