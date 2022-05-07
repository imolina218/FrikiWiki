import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Rickandmorty.module.css'

const Nav = () => {
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
                <Link href="/randmcharacters">Characters</Link>
                <Link href="/randmepisodes">Episodes</Link>
                <Link href="/randmlocations">Locations</Link>
            </div>
            </div>

            <div className={styles.hoversidebar}>
                <p> &gt; </p>
            </div>
            
        </aside>
    </>
  )
}

export default Nav