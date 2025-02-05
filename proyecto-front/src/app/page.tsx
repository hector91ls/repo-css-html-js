import Image from "next/image";
import styles from "../styles/css.module.scss";
import clsx from "clsx";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Animaciones solo con CSS y HTML</h1>
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

        {/* BOTONES*/}
        <div className={styles.contain}>
          <h2>BOTONES</h2>
          <div className={styles.botones}>
            <div className={styles.boton}>|◀</div>
            <div className={styles.boton}>▶</div>
            <div className={styles.boton}>▶|</div>
          </div>

          <div className={clsx(styles.botones, styles.v2)}>
            <div className={styles.boton}>|◀</div>
            <div className={styles.boton}>▶</div>
            <div className={styles.boton}>▶|</div>
          </div>
        </div>
        {/* BOTONES CON FONDO */}

        {/* SCROLL */}
        <div className="contain">
          <h2>Animacion acompañada de scroll</h2>
          <div className={styles.scroll}>
            <div className={clsx(styles.square, styles.t)}>
              <Image
                width={1440}
                height={680}
                src="/assets/coche1.jpg"
                alt="Imagen 1"
              />
            </div>
            <div className={clsx(styles.square, styles.b)}>
              <Image
                width={1440}
                height={680}
                src="/assets/coche2.jpg"
                alt="Imagen 1"
              />
            </div>
            <div className={clsx(styles.square, styles.r)}>
              <Image
                width={1440}
                height={680}
                src="/assets/coche3.jpg"
                alt="Imagen 1"
              />
            </div>
            <div className={clsx(styles.square, styles.l)}>
              <Image
                width={1440}
                height={680}
                src="/assets/coche1.jpg"
                alt="Imagen 1"
              />
            </div>
          </div>
        </div>
        {/* SCROLL */}

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

        {/* ANIMACIÓN CON BOX-SHADOW */}
        <div className={styles.contain}>
          <h2>HOVER ANIMACION BOXSHADOW</h2>

          <div className={styles.photos}>
            <div className={styles.photo}>
              <Image width={500} height={500} src="/assets/1.jpg" alt="" />
            </div>

            <div className={styles.photo}>
              <Image width={500} height={500} src="/assets/2.jpg" alt="" />
            </div>
          </div>
        </div>

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

        {/* TEXTO NEON */}
        <div className={styles.contain}>
          <h2>TEXTO NEON</h2>

          <div className={styles.switch}>
            <div className={styles.on}></div>
          </div>

          <div className={styles.black}>
            <h3 className={`${styles.neon} ${styles.pink}`}>Open</h3>
            <h3 className={`${styles.neon} ${styles.green}`}>Hostel</h3>
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
