import Image from "next/image";
import styles from "../../styles/css.module.scss";
import clsx from "clsx";

export default function Galerias() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Galeria solo con CSS y HTML</h1>
        {/* GALERÍA CON ZOOM Y ROTACIÓN */}
        <div className={styles.contain}>
          <h2>GALERÍA CON ZOOM Y ROTACIÓN</h2>
          <div className={styles.galeria}>
            <div className={styles.imagen}>
              <Image
                width={500}
                height={500}
                src="/assets/1.jpg"
                alt="Imagen 1"
              />
            </div>
            <div className={styles.imagen}>
              <Image
                width={500}
                height={500}
                src="/assets/2.jpg"
                alt="Imagen 2"
              />
            </div>
            <div className={styles.imagen}>
              <Image
                width={500}
                height={500}
                src="/assets/3.jpg"
                alt="Imagen 3"
              />
            </div>
            <div className={styles.imagen}>
              <Image
                width={500}
                height={500}
                src="/assets/4.jpg"
                alt="Imagen 4"
              />
            </div>
            <div className={styles.imagen}>
              <Image
                width={500}
                height={500}
                src="/assets/1.jpg"
                alt="Imagen 1"
              />
            </div>
          </div>
        </div>
        {/* GALERÍA CON ZOOM Y ROTACIÓN */}


        {/* CUBO CON IMÁGENES */}
        <div className={styles.contain}>
          <h2>CUBO</h2>
          <div className={styles.cube}>
            <div className={clsx(styles.face, styles.front)}></div>
            <div className={clsx(styles.face, styles.back)}></div>
            <div className={clsx(styles.face, styles.right)}></div>
            <div className={clsx(styles.face, styles.left)}></div>
            <div className={clsx(styles.face, styles.top)}></div>
            <div className={clsx(styles.face, styles.bottom)}></div>
          </div>
        </div>
        {/* CUBO CON IMÁGENES */}

        {/* GALERÍA GUAY VERTICAL  */}
        <div className={styles.contain}>
          <h2>GALERIA IMAGENES VERTICAL</h2>
          <div className={styles.block}>
            <div className={styles.card}>
              <Image
                width={500}
                height={500}
                src="/assets/1.jpg"
                alt="Imagen 1"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
            <div className={styles.card}>
              <Image
                width={500}
                height={500}
                src="/assets/2.jpg"
                alt="Imagen 2"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
            <div className={styles.card}>
              <Image
                width={500}
                height={500}
                src="/assets/3.jpg"
                alt="Imagen 3"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
            <div className={styles.card}>
              <Image
                width={500}
                height={500}
                src="/assets/4.jpg"
                alt="Imagen 4"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
            <div className={styles.card}>
              <Image
                width={500}
                height={500}
                src="/assets/1.jpg"
                alt="Imagen 1"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
            <div className={styles.card}>
              <Image
                width={500}
                height={500}
                src="/assets/2.jpg"
                alt="Imagen 2"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
            <div className={styles.card}>
              <Image
                width={500}
                height={500}
                src="/assets/3.jpg"
                alt="Imagen 3"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
          </div>
        </div>
        {/* GALERÍA GUAY VERTICAL */}

        {/* GALERÍA GUAY HORIZONTAL */}
        <div className={styles.contain}>
          <h2>GALERIA IMAGENES HORIZONTALES</h2>
          <div className={clsx(styles.block, styles.variant)}>
            <div className={styles.card}>
              <Image
                width={1440}
                height={680}
                src="/assets/coche1.jpg"
                alt="Imagen 1"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
            <div className={styles.card}>
              <Image
                width={1440}
                height={680}
                src="/assets/coche2.jpg"
                alt="Imagen 2"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
            <div className={styles.card}>
              <Image
                width={1440}
                height={680}
                src="/assets/coche3.jpg"
                alt="Imagen 3"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
            <div className={styles.card}>
              <Image
                width={1440}
                height={680}
                src="/assets/coche1.jpg"
                alt="Imagen 4"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
            <div className={styles.card}>
              <Image
                width={1440}
                height={680}
                src="/assets/coche2.jpg"
                alt="Imagen 1"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
            <div className={styles.card}>
              <Image
                width={1440}
                height={680}
                src="/assets/coche3.jpg"
                alt="Imagen 2"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
            <div className={styles.card}>
              <Image
                width={1440}
                height={680}
                src="/assets/coche1.jpg"
                alt="Imagen 3"
              />
              <div className={styles.cardHead}>Prueba de galería</div>
            </div>
          </div>
        </div>
        {/* GALERÍA GUAY HORIZONTAL */}

        {/* GALERÍA GUAY */}
        <div className={styles.contain}>
          <h2>GALERIA Giratorias</h2>
          <div className={clsx(styles.rotation, styles.variant)}>
            <Image
              width={440}
              height={800}
              src="/assets/1.jpg"
              alt="Imagen 1"
            />

            <Image
              width={440}
              height={800}
              src="/assets/2.jpg"
              alt="Imagen 2"
            />

            <Image
              width={440}
              height={800}
              src="/assets/3.jpg"
              alt="Imagen 3"
            />

            <Image
              width={440}
              height={800}
              src="/assets/1.jpg"
              alt="Imagen 4"
            />

            <Image
              width={440}
              height={800}
              src="/assets/2.jpg"
              alt="Imagen 1"
            />

            <Image
              width={440}
              height={800}
              src="/assets/3.jpg"
              alt="Imagen 2"
            />

            <Image
              width={440}
              height={800}
              src="/assets/1.jpg"
              alt="Imagen 3"
            />

            <Image
              width={440}
              height={800}
              src="/assets/2.jpg"
              alt="Imagen 1"
            />
          </div>
        </div>
        {/* GALERÍA GUAY */}
      </div>
    </div>
  );
}
