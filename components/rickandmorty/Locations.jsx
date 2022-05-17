import { useState, useEffect } from 'react';
import Card from './characters/Card';
import InputOptions from './filter/category/InputOptions';
import styles from '../../styles/Rickandmorty.module.css';

const Locations = () => {
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
    </>
  )
}

export default Locations