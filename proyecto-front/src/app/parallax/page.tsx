"use client";

import Image from "next/image";
import styles from "./parallax.module.scss";
import clsx from "clsx";

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={clsx(styles.sectionC)}></section>
      <section className={clsx(styles.sectionP)}>
        <div className={styles.content}>
        <Image
            width={3600}
            height={1600}
            src="/assets/cielo.png"
            className={styles.cielo}
            alt="Imagen 2"
          />
           <Image
            width={3600}
            height={1600}
            src="/assets/pajaros.png"
            className={styles.pajaros}
            alt="Imagen 2"
          />
           <Image
            width={3600}
            height={1600}
            src="/assets/pajaros2.png"
            className={styles.pajaros}
            alt="Imagen 2"
          />
         
          <Image
            width={3600}
            height={1600}
            src="/assets/montañas.png"
            className={styles.montañas}
            alt="Imagen 2"
          />
         
          <Image
            width={3600}
            height={1600}
            src="/assets/bosque.png"
            className={styles.bosque}
            alt="Imagen 2"
          />
           <Image
            width={3600}
            height={1600}
            src="/assets/suelo.png"
            className={styles.suelo}
            alt="Imagen 2"
          />
           <Image
            width={3600}
            height={1600}
            src="/assets/ventana.png"
            className={styles.ventana}
            alt="Imagen 2"
          />
          <Image
            width={3600}
            height={1600}
            src="/assets/man.png"
            className={styles.man}
            alt="Imagen 2"
          />
        </div>
      </section>
      <section className={styles.sectionC}></section>
    </div>
  );
}
