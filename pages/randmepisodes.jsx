import { useState, useEffect } from 'react';
import Image from 'next/image';
import NavHead from '../components/rickandmorty/NavHead';

import styles from '../styles/Rickandmorty.module.css';
import Card from '../components/rickandmorty/characters/Card';
import InputOptions from '../components/rickandmorty/filter/category/InputOptions';

const randmepisodes = () => {
    let [id, setId] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let { air_date, name } = info;

    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function(){
            let data = await fetch(api).then(res => res.json());
            setInfo(data);

            let each = await Promise.all(
                data.characters.map((character) => {
                    return fetch(character).then((res) => res.json());
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
                        src="/img/randm/Banner02.png"
                        alt="Rick and Morty banner"
                        width={2000}
                        height={500}
                    />
                </div>

                <div className={styles.options}>
                    <InputOptions
                        option="Episode"
                        name="Episode"
                        setId={setId} 
                        total={51} 
                    />
                </div>

                <div className={styles.details}>
                    <h5><span>Episode:</span> {name === "" ? "Unknown" : name}</h5>
                    <h5><span>Air Date:</span> {air_date === "" ? "Unknown" : air_date}</h5>
                    <h5><span>Characters:</span></h5>
                </div>

                <div>
                    <Card results={results}/>
                </div>
            </main>    
        </>
    )
}

export default randmepisodes