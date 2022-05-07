import { useState, useEffect } from 'react';
import { HiArrowLeft } from "react-icons/hi";
import Pagination from './Pagination';
import Search from './Search';
import styles from '../../styles/Starwars.module.css';
import Spinner from './Spinner';

const Species = () => {

    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [modal, setModal] = useState(false);
    let [about, setAbout] = useState({});

    let [fetchData, setFetchData] = useState([]);
    let { info, results } = fetchData;

    let api = `https://swapi.dev/api/species?search=${search}&page=${pageNumber}`;
    let display;

    const handleModal = () => {
        return setModal(!modal);
    }

    useEffect(() => {
        (async function(){
            let data = await fetch(api).then((res) => res.json());
            setFetchData(data)
        })()
    }, [api]);

    if(results) {
        display = results.map(result => {
            let { name } = result;
            return (
                <div key={name}>
                <div>
                    <p>{name}</p> 
                </div>

                <button
                    className={styles.learnmore}
                    type="button"
                    onClick={ () => {{
                        handleModal(),
                        setAbout({result})
                    }}}
                >Learn More</button>
                </div>
            )
        });
    } else {
        display = <Spinner />;
    }

    if(modal) {
        let { name, classification, designation, average_height, skin_colors,
            hair_colors, eye_colors, average_lifespan, language } = about.result;
        
        return (
            <div className={styles.modal}>

                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3>{name}</h3> 
                        <p><span>Classification</span> {classification}</p>
                        <p><span>Designation</span> {designation}</p>
                        <p><span>Average Height</span> {average_height}</p>
                        <p><span>Skin Colors</span> {skin_colors} </p>
                        <p><span>Hair Colors</span> {hair_colors}</p>  
                        <p><span>Eye Colors</span> {eye_colors}</p> 
                        <p><span>Average Lifespan</span> {average_lifespan} years</p>  
                        <p><span>Language</span> {language}</p> 
                    </div>
                    <button 
                    className={styles.close} 
                    type="button" 
                    onClick={ () => {{
                        handleModal(),
                        setAbout({})
                    }}}>
                    <HiArrowLeft />
                    </button>
                    
                </div>
                
            </div>
            
        )
    }

    return (
        <>
            <Search 
                setPageNumber={setPageNumber}
                setSearch={setSearch}
            />

            <ul className={styles.card}>
                {display}
            </ul>

            <Pagination 
                fetchData={fetchData}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            />
        </>
    )
}

export default Species