import { useState, useEffect } from 'react';
import { HiArrowLeft } from "react-icons/hi";
import styles from '../../styles/Starwars.module.css';
import Spinner from './Spinner';

const Films = () => {
    let [modal, setModal] = useState(false);
    let [id, setId] = useState("");
    let [info, setInfo] = useState(null);
    let [fetchData, setFetchData] = useState([]);
    let { results } = fetchData;
    let display;

      
    let api = `https://swapi.dev/api/films/`;

    const handleModal = () => {
        return setModal(!modal);
    }

    useEffect(() => {
        (async function(){
            let data = await fetch(api).then((res) => res.json());
            setFetchData(data)
        })()
    
    }, []);

    if(results) {
        display = results.map(result => {
            let { episode_id } = result;
            return (
                
                <div key={episode_id}>
                    
                    <div>
                        <img src={`/img/sw/Ep${episode_id}.png`}alt="${title} poster"/>
                    </div>
                    <button
                        className={styles.learnmore}
                        type="button"
                        onClick={ () => {{
                            handleModal(),
                            setId(episode_id),
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
        let { episode_id, title, opening_crawl, director, producer, release_date } = info.result;
        
        return (
            <div className={styles.modal}>

                <div className={styles.contentmovies}>
                                        
                    <img src={`/img/sw/Ep${id}.png`} alt="${title} poster"/>

                    <div className={styles.info}>
                        <h3>{title}</h3> 
                        <p><span>Episode</span> {episode_id}</p>
                        <p><span>Director</span> {director}</p>
                        <p><span>Producer</span> {producer}</p>
                        <p><span>Release Date</span> {release_date}</p>
                        <p><span>Opening crawl</span> {opening_crawl}</p>  
                    </div>
                    <button 
                        className={styles.close} 
                        type="button" 
                        onClick={ () => {{
                            handleModal(),
                            setId(""),
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

export default Films