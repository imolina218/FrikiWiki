import { useState, useEffect } from 'react';
import styles from '../../styles/Starwars.module.css';
import { HiArrowLeft } from "react-icons/hi";
import Pagination from './Pagination';
import Search from './Search';
import Spinner from './Spinner';

const Planets = () => {

    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [modal, setModal] = useState(false);
    let [about, setAbout] = useState({});

    let [fetchData, setFetchData] = useState([]);
    let { info, results } = fetchData;

    let api = `https://swapi.dev/api/planets?search=${search}&page=${pageNumber}`;
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
        
        display = <Spinner /> ;
    }

    if(modal) {
        let { name, diameter, gravity, rotation_period, orbital_period,
            population, climate, terrain, surface_water} = about.result;
        
        return (
            <div className={styles.modal}>

                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3>{name}</h3> 
                        <p><span>Diameter</span> {diameter}</p>
                        <p><span>Gravity</span> {gravity} G</p>
                        <p><span>Rotation Period</span> {rotation_period}</p>
                        <p><span>Orbital Period</span> {orbital_period}</p>
                        <p><span>Population</span> {population}</p>  
                        <p><span>Climate</span> {climate}</p> 
                        <p><span>Terrain</span> {terrain}</p>  
                        <p><span>Water Surface</span> {surface_water}</p> 
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

export default Planets