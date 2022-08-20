import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Movies from '../components/moviesandseries/Movies';
import Series from '../components/moviesandseries/Series';
import styles from '../styles/Movies.module.css';

const Moviesandseries = () => {
  const publicKey = process.env.NEXT_PUBLIC_MOVIES;
  let [section, setSection] = useState("movies");

  return (
    <>
      <Head>
        <title>Friki Wiki - Movies & Series</title>
        <meta name="Marvel" content="wiki of marvel"/>
      </Head>

      <aside className={styles.sidebar}>
        <div className={styles.mainsidebar}>
          <div className={styles.title}>
            <Link href="/"><h2>Friki Wiki</h2></Link>
            <div>
              <Image
                priority
                src="/img/FilmsLogo.png"
                alt="Marvel logo"
                width={120}
                height={50}
              />
            </div>
          </div>

          <div className={styles.nav}>
            <button onClick={() => setSection("movies")}>Movies</button>
            <button onClick={() => setSection("series")}>Series</button>
          </div>
        </div>

        <div className={styles.hoversidebar}>
          <p> &gt; </p>
        </div>
        
      </aside>

      <main className={styles.container}>
        
        <div className={styles.img}>
          <Image
            priority
            src="/img/movies/Banner01.png"
            alt="Marvel banner"
            width={2000}
            height={500}
          />
        </div>

        { section === "movies" 
          ?
            <div > 
              <h2 className={styles.titlem}>Movies</h2>
              <Movies 
                publicKey={publicKey}
              />
            </div>

          : section === "series" ?
            <div>
              <h2 className={styles.titlem}>Series</h2>
              <Series 
                publicKey={publicKey}
              />
            </div>

          : <p>Huge Error</p>
        }
        
      </main>
    </>
  )
}

export default Moviesandseries
