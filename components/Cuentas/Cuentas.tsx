import { USER } from '@/utils/userDataModel'
import styles from './Cuentas.module.css'
import { Carta } from './Carta'

export function Cuentas() {
  return (
    <section className={styles.contenedorCartas}>
      {USER.accounts.map((cuenta) => (
        <div key={cuenta.number}>
          <Carta
            descripcion={cuenta.type}
            saldo={cuenta.balance}
            tipoAhorro={cuenta.currency}
          />
        </div>
      ))}
    </section>
  )
}