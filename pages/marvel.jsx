import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Marvel.module.css';
import Comics from '../components/marvel/Comics';
import Characters from '../components/marvel/Characters';
import Events from '../components/marvel/Events';
import Series from '../components/marvel/Series';

const Marvel = () => {

  const publicKey = process.env.NEXT_PUBLIC_MARVELPUBLICKEY;
  const hash = process.env.NEXT_PUBLIC_MARVELHASH;
  let [section, setSection] = useState("comics");

  return (
    <>
      <Head>
        <title>Friki Wiki - Marvel</title>
        <meta name="Marvel" content="wiki of marvel"/>
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
            <button onClick={() => setSection("comics")}>Comics</button>
            <button onClick={() => setSection("characters")}>Characters</button>
            <button onClick={() => setSection("events")}>Events</button>
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
            src="/img/marvel/Banner01.png"
            alt="Marvel banner"
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
              <Characters 
                publicKey={publicKey}
                hash={hash}
              />
            </div>

          : section === "events" ?
            <div>
              <h2 className={styles.titlem}>Events</h2>
              <Events 
                publicKey={publicKey}
                hash={hash}
              />
            </div>

          : section === "series" ?
            <div>
              <h2 className={styles.titlem}>Series</h2>
              <Series 
                publicKey={publicKey}
                hash={hash}
              />
            </div>

          : <p>Huge Error</p>
        }
        
      </main>
    </>
  )
}

export default Marvel
