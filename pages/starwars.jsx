import {useState, useEffect} from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Starwars.module.css';
import Films from '../components/sw/Films';
import Characters from '../components/sw/Characters';
import Starships from '../components/sw/Starships';
import Vehicles from '../components/sw/Vehicles';
import Species from '../components/sw/Species';
import Planets from '../components/sw/Planets';

const Starwars = () => {

  let [section, setSection] = useState("films");

  return (
    <>
      
      <Head>
          <title>Friki Wiki - Star Wars</title>
          <meta name="star wars" content="wiki of star wars"/>
      </Head>

      <aside className={styles.sidebar}>
          <div className={styles.mainsidebar}>
              <div className={styles.title}>
                  <Link href="/"><h2>Friki Wiki</h2></Link>
                  <div className={styles.img}>
                  <Image
                      priority
                      src="/img/StarWarsLogo.png"
                      alt="The office logo"
                      width={120}
                      height={50}
                  />
                  </div>
              </div>

              <div className={styles.nav}>
                <button onClick={() => setSection("films")}>Films</button>
                <button onClick={() => setSection("characters")}>Characters</button>
                <button onClick={() => setSection("starships")}>Starships</button>
                <button onClick={() => setSection("vehicles")}>Vehicles</button>
                <button onClick={() => setSection("species")}>Species</button>
                <button onClick={() => setSection("planets")}>Planets</button>
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
            src="/img/sw/Banner.png"
            alt="Star Wars banner"
            width={2000}
            height={500}
          />
        </div>

        { section === "films" 
          ?
            <div > 
              <h2 className={styles.titlem}>Films</h2>
              <Films />
            </div>
          : section === "characters" ?
            <div>
              <h2 className={styles.titlem}>Characters</h2>
              <Characters />
            </div>

          : section === "starships" ?
            <div>
              <h2 className={styles.titlem}>Starships</h2>
              <Starships />
            </div>

          : section === "vehicles" ?
            <div>
              <h2 className={styles.titlem}>Vehicles</h2>
              <Vehicles />
            </div>

          : section === "species" ?
            <div>
              <h2 className={styles.titlem}>Species</h2>
              <Species />
            </div>

          : section === "planets" ? 
            <div>
              <h2 className={styles.titlem}>Planets</h2>
              <Planets />
            </div>

          : <p>Huge Error</p>
        }
        
      </main>
    </>
  )
}
  
export default Starwars