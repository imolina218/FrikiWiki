import { useState } from 'react';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Marvel.module.css';
import Comics from '../components/marvel/Comics';

const marvel = () => {

  const publicKey = process.env.NEXT_PUBLIC_MARVELPUBLICKEY;
  const hash = process.env.NEXT_PUBLIC_MARVELHASH;
  let [section, setSection] = useState("comics");

  return (
    <>
      <Head>
        <title>Friki Wiki - Game of Thrones</title>
        <meta name="game of thrones" content="wiki of game of thrones"/>
      </Head>

      <aside className={styles.sidebar}>
        <div className={styles.mainsidebar}>
          <div className={styles.title}>
            <Link href="/"><h2>Friki Wiki</h2></Link>
            <div>
              <Image
                priority
                src="/img/MarvelLogo.png"
                alt="Marvel logo"
                width={120}
                height={50}
              />
            </div>
          </div>

          <div className={styles.nav}>
          <button onClick={() => setSection("films")}>Comics</button>
            <button onClick={() => setSection("characters")}>Characters</button>
            <button onClick={() => setSection("starships")}>Creators</button>
            <button onClick={() => setSection("vehicles")}>Events</button>
            <button onClick={() => setSection("species")}>Series</button>
            <button onClick={() => setSection("planets")}>Stories</button>
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
            src="/img/marvel/Banner01.png"
            alt="Star Wars banner"
            width={2000}
            height={500}
          />
        </div>

        { section === "comics" 
          ?
            <div > 
              <h2 className={styles.titlem}>Comics</h2>
              <Comics 
                publicKey={publicKey}
                hash={hash}
              />
            </div>

          : section === "characters" ?
            <div>
              <h2 className={styles.titlem}>Characters</h2>
            </div>

          : section === "creators" ?
            <div>
              <h2 className={styles.titlem}>Starships</h2>
            </div>

          : section === "events" ?
            <div>
              <h2 className={styles.titlem}>Vehicles</h2>
            </div>

          : section === "series" ?
            <div>
              <h2 className={styles.titlem}>Species</h2>
            </div>

          : section === "stories" ? 
            <div>
              <h2 className={styles.titlem}>Planets</h2>
            </div>

          : <p>Huge Error</p>
        }
        
      </main>
    </>
  )
}

export default marvel
