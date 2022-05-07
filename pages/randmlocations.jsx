import { useState, useEffect } from 'react';
import Image from 'next/image';
import NavHead from '../components/rickandmorty/NavHead';

import styles from '../styles/Rickandmorty.module.css';
import Card from '../components/rickandmorty/characters/Card';
import InputOptions from '../components/rickandmorty/filter/category/InputOptions';

const randmlocations = () => {
    let [id, setId] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let { name, type, dimension } = info;

    let api = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect(() => {
        (async function(){
            let data = await fetch(api).then(res => res.json());
            setInfo(data);

            let each = await Promise.all(
                data.residents.map((resident) => {
                    return fetch(resident).then((res) => res.json());
                })
            );
            setResults(each);
        })()
    }, [api]);

    return (
        <>

            <NavHead />

            <main className={styles.container}>
                <div className={styles.img}>
                    <Image
                        priority
                        src="/img/randm/Banner03.png"
                        alt="Rick and Morty banner"
                        width={2000}
                        height={500}
                    />
                </div>

                <div className={styles.options}>
                    <InputOptions
                        option="Location"
                        name="Location"
                        setId={setId} 
                        total={126} 
                    />
                </div>

                <div className={styles.details}>
                    
                    <h5><span>Location:</span> {name === "" ? "Unknown" : name}</h5>
                    <h5><span>Dimension:</span> {dimension === "" ? "Unknown" : dimension}</h5>
                    <h5><span>Type:</span> {type === "" ? "Unknown" : type}</h5>
                    <h5><span>Residents:</span></h5>
                </div>

                <div>
                    <Card results={results}/>
                </div>
            </main>    
        </>
    )
}

export default randmlocations