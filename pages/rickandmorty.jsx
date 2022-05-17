import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Characters from '../components/rickandmorty/Characters';
import Episodes from '../components/rickandmorty/Episodes';
import Locations from '../components/rickandmorty/Locations';
import styles from '../styles/Rickandmorty.module.css';

const rickandmorty = () => {

  let [section, setSection] = useState("characters");

  return (
    <>

      <Head>
          <title>Friki Wiki - Rick & Morty</title>
          <meta name="rick and morty" content="wiki of rick and morty"/>
      </Head>

      <aside className={styles.sidebar}>
          <div className={styles.mainsidebar}>
          <div className={styles.title}>
              <Link href="/"><h2>Friki Wiki</h2></Link>
              <div className={styles.img}>
              <Image
                  priority
                  src="/img/RickandMortyLogo.png"
                  alt="Rick and Morty logo"
                  width={120}
                  height={50}
              />
              </div>
          </div>

          <div className={styles.nav}>
            <button onClick={() => setSection("characters")}>Characters</button>
            <button onClick={() => setSection("episodes")}>Episodes</button>
            <button onClick={() => setSection("locations")}>Locations</button>
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
            src="/img/randm/Banner.png"
            alt="Rick and Morty banner"
            width={2000}
            height={500}
          />

          { section === "characters" 
            ?
              <div > 
                <h2 className={styles.titlem}>Characters</h2>
                <Characters />
              </div>

            : section === "episodes" ?
              <div>
                <h2 className={styles.titlem}>Episodes</h2>
                <Episodes />
              </div>

            : section === "locations" ?
              <div>
                <h2 className={styles.titlem}>Locations</h2>
                <Locations />
              </div>

            : <p>Huge Error</p>
          }

        </div>

      </main>
    </>
  )
}

export default rickandmorty