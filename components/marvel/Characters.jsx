import { useState, useEffect } from 'react';
import { HiArrowLeft } from "react-icons/hi";
import styles from '../../styles/Marvel.module.css';
import Pagination from './Pagination';
import Spinner from './Spinner';

const Characters = ({publicKey, hash}) => {
    let [modal, setModal] = useState(false);
    let [info, setInfo] = useState(null);
    let [infoType, setInfoType] = useState("");
    let [pageNumber, setPageNumber] = useState(0)
    let [fetchData, setFetchData] = useState([]);
    let { data } = fetchData;
    let display;
        
    let api = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}&limit=50&offset=${pageNumber}`;

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
            let { id, name } = result;
            return (
                
            <div key={id}>
                <div className={styles.cardimg}>
                <img src={`${result.thumbnail.path}.${result.thumbnail.extension}`} alt={`${name} image`} />
                </div>      

                <div>
                <p>{name}</p>
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
        display = <Spinner />;
    }

  if(modal) {
    let { name, description, comics, thumbnail, events, series, stories } = info.result;
    return (
        
        <div className={styles.modal}>

            <div className={styles.contentimg}>
                                    
            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`${name} image`}/>

            <div className={styles.info}>
                <h3>{name}</h3>
                <div><span>Description :</span> {description}</div>
                <button
                    type="button"
                    onClick={() => setInfoType("comics")}
                >Comics</button>
                <button
                    type="button"
                    onClick={() => setInfoType("events")}
                >Events</button>
                <button
                    type="button"
                    onClick={() => setInfoType("series")}
                >Series</button>
                <button
                    type="button"
                    onClick={() => setInfoType("stories")}
                >Stories</button>
                {infoType !== false &&  
                    infoType === "events" ? <div>{events.items.map(event => ( <p key={event.resourceURI}>{event.name}</p> ))}</div> :
                    infoType === "series" ? <div>{series.items.map(serie => ( <p key={serie.resourceURI}>{serie.name}</p> ))}</div> :
                    infoType === "stories" ? <div>{stories.items.map(story => ( <p key={story.resourceURI}>{story.name}</p> ))}</div> :
                    infoType === "comics" ? <div>{comics.items.map(comic => ( <p key={comic.resourceURI}>{comic.name}</p> ))}</div> : ""
                } 
            </div>

            <button 
                className={styles.close} 
                type="button" 
                onClick={ () => {{
                    handleModal(),
                    setInfo({}),
                    setInfoType("")
                }}}>
                <HiArrowLeft />
            </button>
                
            </div>
            
        </div>      
          
    )
  }

  return (
    <>

        <Pagination 
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
        />

            <ul className={styles.card}>
                {display}
            </ul>

        <Pagination 
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            total={1562}
        />
    </>
  )
}

export default Characters
