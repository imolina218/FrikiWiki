import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Friki Wiki - Home</title>
        <meta name="home" content="Index of friki wiki"/>
      </Head>

      <header className={styles.header}>
        <h1>Friki Wiki <span>Index</span></h1>
      </header>

      <main className={styles.container}>
        <div className={styles.movies}>
          <div className={styles.content}>
            <p>Movies</p>
            <p>Series</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p>Click to go to the wiki</p>
          </div>
          
          <div className={styles.img}>
            <Link href="/moviesandseries">
              <Image
                priority
                src="/static/img/MoviesAndSeries.png"
                alt="Movies and Series poster"
                width={500}
                height={800}
              />
            </Link>
          </div>

        </div>

        <div className={styles.marvel}>
          <div className={styles.content}>
            <p>Comics</p>
            <p>Characters</p>
            <p>Events</p>
            <p>Series</p>
            <p></p>
            <p></p>
            <p>Click to go to the wiki</p>
          </div>
          
          <div className={styles.img}>
            <Link href="/marvel">
              <Image
                priority
                src="/static/img/Marve.png"
                alt="Image of Marvel"
                width={500}
                height={800}
              />
            </Link>
          </div>

        </div>

        <div className={styles.starwars}>
          <div className={styles.content}>
            <p>Films</p>
            <p>Characters</p>
            <p>Starships</p>
            <p>Vehicles</p>
            <p>Species</p>
            <p>Planets</p>
            <p>Click to go to the wiki</p>
          </div>
          
          <div className={styles.img}>
            <Link href="/starwars">
              <Image
                src="/static/img/StarWars.jpg"
                alt="Picture of Star Wars"
                width={500}
                height={800}
              />
            </Link>
          </div>
          
        </div>

        <div className={styles.rickandm}>
          <div className={styles.content}>
            <p>Episodes</p>
            <p>Characters</p>
            <p>Locations</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p>Click to go to the wiki</p>
          </div>

          <div className={styles.img}>
            <Link href="/rickandmorty">
              <Image
                priority
                src="/static/img/RickAndMorty.jpg"
                alt="Picture of Rick And Morty"
                width={500}
                height={800}
              />
            </Link>
          </div>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <p className={styles.copyright}>All rights not reserved</p>
      </footer>
    </>
  )
}
