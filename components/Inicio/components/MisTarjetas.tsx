'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi/index'
import { GoDotFill, GoDot } from 'react-icons/go/index'
import { USER } from '@/utils/userDataModel'
import styles from '../Inicio.module.css'
import { Tarjeta } from './Tarjeta'

export function MisTarjetas() {
  const listaTarjetas = USER.cards
  const [tarjetaPosicion, setTarjetaPosicion] = useState(0)
  const router = useRouter()
  const cantidadTarjetas = listaTarjetas.length - 1

  const avanzar = () =>
    tarjetaPosicion >= 0 && tarjetaPosicion < cantidadTarjetas
      ? setTarjetaPosicion(tarjetaPosicion + 1)
      : setTarjetaPosicion(0)

  const retroceder = () =>
    tarjetaPosicion <= 0
      ? setTarjetaPosicion(cantidadTarjetas)
      : setTarjetaPosicion(tarjetaPosicion - 1)

  return (
    <article className={styles.contenedor_mis_tarjetas}>
      <h3>Mis Tarjetas</h3>
      <section className={styles.todas_las_tarjetas}>
        <BiLeftArrow
          onClick={retroceder}
          className={styles.flecha_desplazamiento}
        />
        <Tarjeta
          datosTarjeta={listaTarjetas[tarjetaPosicion]}
          onClick={() => {
            router.push(`/inicio/tarjetas/${listaTarjetas[tarjetaPosicion].id}`)
          }}
        />
        <BiRightArrow
          onClick={avanzar}
          className={styles.flecha_desplazamiento}
        />
      </section>
      <section className={styles.carrousel_tarjetas}>
        {listaTarjetas.length &&
          listaTarjetas.map((tarj, index) => {
            return index === tarjetaPosicion ? (
              <GoDotFill key={tarj.id} className={styles.posicion_tarjeta} />
            ) : (
              <GoDot
                key={tarj.id}
                className={styles.posicion_tarjeta}
                onClick={() => setTarjetaPosicion(index)}
              />
            )
          })}
      </section>
    </article>
  )
}