import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { dateFormat } from '../helpers'
import styles from '../styles/Theoffice.module.css'

/* const getEpisode = async () => {
  
} */

export async function getServerSideProps() {
  
  const urlEp = "https://www.officeapi.dev/api/episodes/random"
  const responseEp = await fetch(urlEp)
  const dataEp = await responseEp.json()

  const { writer, director } = dataEp.data

  const urlWr = `https://www.officeapi.dev/api/crew/${writer}`
  const responseWr = await fetch(urlWr)
  const dataWr = await responseWr.json()
  
  const urlDi = `https://www.officeapi.dev/api/crew/${director}`
  const responseDi = await fetch(urlDi)
  const dataDi = await responseDi.json()
  
  return {
    props: {
      dataEp,
      dataWr,
      dataDi
    }
  }
}

const theoffice = ({dataEp, dataWr, dataDi}) => {

  return (
    <>
      <Head>
        <title>Friki Wiki - The Office</title>
        <meta name="the office" content="wiki of the office"/>
      </Head>
      
      <aside className={styles.sidebar}>
        <div className={styles.mainsidebar}>
          <div className={styles.title}>
            <Link href="/"><h2>Friki Wiki</h2></Link>
            <div className={styles.img}>
              <Image
                priority
                src="/img/TheofficeLogo.png"
                alt="The office logo"
                width={120}
                height={50}
              />
            </div>
          </div>

          <div className={styles.nav}>
            <Link href="#">Episodes</Link>
            <Link href="#">Characters</Link>
            <Link href="#">Quotes</Link>
            <Link href="#">Crew</Link>
          </div>
        </div>

        <div className={styles.hoversidebar}>
          <p> &gt; </p>
        </div>
        
      </aside>
        
      <main className={styles.container}>

        <div className={styles.header}>
          <div className={styles.img}>
            <Image
              priority
              src="/img/theoffice/TheOfficeBuilding.png"
              alt="The office picture"
              width={2000}
              height={500}
            />
          </div>
        </div>

        <div className={styles.data}>
          <div className={styles.episode}>
            <h2>Episode</h2>

            <table className={styles.table}>
              <tbody>
                <tr>
                  <td className={styles.reference}>Title:</td>
                  <td className={styles.info}>{dataEp.data.title}</td>
                </tr>
                <tr>
                  <td className={styles.reference}>Sinopsis:</td>
                  <td className={styles.info}>{dataEp.data.description}</td>
                </tr>
                <tr>
                  <td className={styles.reference}>Writer:</td>
                  <td className={styles.info}>{dataWr.data.name}</td>
                </tr>
                <tr>
                  <td className={styles.reference}>Director:</td>
                  <td className={styles.info}>{dataDi.data.name}</td>
                </tr>
                <tr>
                  <td className={styles.reference}>AirDate:</td>
                  <td className={styles.info}>{dateFormat(dataEp.data.airDate)}</td>
                </tr>
              </tbody>
            </table>
            
            <button
              type="button"
              value="episode"
            >Get random episode</button>
          </div>

          <div className={styles.characters}>
            <h2>Characters</h2>
          </div>

          <div className={styles.quotes}>
            <h2>Quotes</h2>
          </div>

          <div className={styles.crew}>
            <h2>Crew</h2>
          </div>
        </div>
          
      </main>
      
    </>  
  )
}

export default theoffice