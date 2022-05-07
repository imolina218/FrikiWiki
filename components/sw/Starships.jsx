import { useState, useEffect } from 'react';
import styles from '../../styles/Starwars.module.css';
import { HiArrowLeft } from "react-icons/hi";
import Pagination from './Pagination';
import Search from './Search';
import Spinner from './Spinner';

const Starships = () => {

    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [modal, setModal] = useState(false);
    let [about, setAbout] = useState({});

    let [fetchData, setFetchData] = useState([]);
    let { info, results } = fetchData;

    let api = `https://swapi.dev/api/starships?search=${search}&page=${pageNumber}`;
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
        let { name, model, manufacturer, cost_in_credits, length, 
            max_atmosphering_speed, crew, passengers, cargo_capacity, 
            consumables, hyperdrive_rating, MGLT, starship_class } = about.result;
        
        return (
            <div className={styles.modal}>

                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3>{name}</h3> 
                        <p><span>Model</span> {model}</p>
                        <p><span>Manufacturer</span> {manufacturer}</p>
                        <p><span>Cost in Credits</span> {cost_in_credits}</p>
                        <p><span>Length</span> {length} meters</p>
                        <p><span>Max Atmosphering Speed</span> {max_atmosphering_speed}</p>  
                        <p><span>Crew</span> {crew}</p>  
                        <p><span>Passengers</span> {passengers}</p>  
                        <p><span>Cargo Capacity</span> {cargo_capacity} kilograms</p>  
                        <p><span>Consumables</span> {consumables}</p>  
                        <p><span>Hyperdrive Rating</span> {hyperdrive_rating}</p>  
                        <p><span>MGLT</span> {MGLT}</p>  
                        <p><span>Starship Class</span> {starship_class}</p>  
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

export default Starships
