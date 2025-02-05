import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import styles from "../styles/common.module.scss"


export const metadata: Metadata = {
  title: "Repositorio Front-End",
  description:
    "Repositirio creado por HLS con recursos para utilizar en la parte Front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.nav}>
          <Link href="/">Todo</Link>
          <Link href="/galerias">Galerias</Link>
          <Link href="/textos">Textos</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
