import { useState, useEffect } from 'react';
import { HiArrowLeft } from "react-icons/hi";
import styles from '../../styles/Marvel.module.css';

const Comics = ({publicKey, hash}) => {
  let [modal, setModal] = useState(false);
  let [info, setInfo] = useState(null);
  let [fetchData, setFetchData] = useState([]);
  let { data } = fetchData;
  let display;
    
  let api = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}&limit=50&offset=0`;

  const handleModal = () => {
      return setModal(!modal);
  }

  useEffect(() => {
    (async function(){
        let data = await fetch(api).then((res) => res.json());
        setFetchData(data)
    })()
  
  }, [api]);

  if(data) {
      display = data.results.map(result => {
        let { id, title } = result;
        return (
            
          <div key={id}>
            <div className={styles.cardimgcomic}>
              <img src={`${result.thumbnail.path}.${result.thumbnail.extension}`} alt={`${title} image`} />
            </div>      

            <div>
              <p>{title}</p>
            </div>

            <button
                className={styles.learnmore}
                type="button"
                onClick={ () => {{
                    handleModal(),
                    setInfo({result})
                }}}
            >Learn More</button>
          
          </div>
        )
      });
  } else {
    display = "No Results Found";
    /* display = <Spinner />; */
  }

  if(modal) {
    let { title, issueNumber, description, format, pageCount, thumbnail } = info.result;
    console.log(info);
    return (
      <div className={styles.modal}>

        <div className={styles.contentimg}>
                                
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`${title} image`}/>

          <div className={styles.info}>
            <h3>{title}</h3> 
            <p><span>Issue Number :</span> {issueNumber}</p>
            <p><span>Description :</span> {description}</p>
            <p><span>Format :</span> {format}</p>
            <p><span>Pages :</span> {pageCount}</p> 
          </div>
          <button 
            className={styles.close} 
            type="button" 
            onClick={ () => {{
                handleModal(),
                setInfo({})
            }}}>
            <HiArrowLeft />
          </button>
            
        </div>
          
      </div>
          
          
    )
  }

  return (
      <>
          <ul className={styles.card}>
              {display}
          </ul>
      </>
  )
}

export default Comics
