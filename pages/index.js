import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Quote from "../components/quote";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Random Quote Machine</title>
        <meta name="description" content="Generator of random quotes" />
      </Head>

      <main className={styles.main}>
        <Quote />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_contenido}>
          <p>Developed by</p>
          <div className={styles.logo}>
            <a
              href="https://linktr.ee/waldohidalgo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                priority={true}
                src="/images/logo_waldo.png"
                alt="logo waldo hidalgo"
                layout="responsive"
                width={820}
                height={218}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
