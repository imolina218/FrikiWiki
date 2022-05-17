import { useState, useEffect } from 'react';
import Card from './characters/Card';
import InputOptions from './filter/category/InputOptions';
import styles from '../../styles/Rickandmorty.module.css';


const Episodes = () => {
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
    </>
  )
}

export default Episodes