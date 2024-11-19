import { TablaHistorial } from './TablaHistorial'
import styles from './Pagos.module.css'

export function Pagos() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <section className={styles.tabla}>
        <h2> Historial de pagos</h2>
        <TablaHistorial />
        <button type='button' className={styles.verMasHistorial}>
          Ver más
        </button>
      </section>
    </div>
  )
}