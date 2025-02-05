
import styles from "../../styles/css.module.scss";
import clsx from "clsx";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Textos</h1>
        
        {/* TEXTO NEON */}
        <div className={styles.contain}>
          <h2>TEXTO NEON</h2>

          <div className={styles.switch}>
            <div className={styles.on}></div>
          </div>

          <div className={styles.black}>
            <h3 className={`${styles.neon} ${styles.pink}`}>Front-End</h3>
            <h3 className={`${styles.neon} ${styles.green}`}>Developer</h3>
          </div>
        </div>
        {/* TEXTO NEON */}

        {/* PUNTOS SUSPENSIVOS */}
        <div className={styles.contain}>
          <h2>PUNTOS SUSPENSIVOS</h2>

          <div className={styles.examples}>
            <div className={styles.box}>
              <h3> -webkit-line-clamp: none</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                expedita, perspiciatis quasi culpa inventore sint itaque, odit
                deserunt delectus minima placeat non cumque natus voluptatem
                illum nemo exercitationem magnam aperiam.
              </p>
            </div>

            <div className={clsx(styles.box, styles.n1)}>
              <h3> -webkit-line-clamp: 1;</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                expedita, perspiciatis quasi culpa inventore sint itaque, odit
                deserunt delectus minima placeat non cumque natus voluptatem
                illum nemo exercitationem magnam aperiam.
              </p>
            </div>

            <div className={clsx(styles.box, styles.n2)}>
              <h3> -webkit-line-clamp: 2;</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                expedita, perspiciatis quasi culpa inventore sint itaque, odit
                deserunt delectus minima placeat non cumque natus voluptatem
                illum nemo exercitationem magnam aperiam.
              </p>
            </div>
            <div className={clsx(styles.box, styles.n3)}>
              <h3> -webkit-line-clamp: 3;</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                expedita, perspiciatis quasi culpa inventore sint itaque, odit
                deserunt delectus minima placeat non cumque natus voluptatem
                illum nemo exercitationem magnam aperiam.
              </p>
            </div>
          </div>
        </div>
        {/* PUNTOS SUSPENSIVOS */}
      </div>
    </div>
  );
}
