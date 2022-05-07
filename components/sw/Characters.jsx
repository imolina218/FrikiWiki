import { useState, useEffect } from 'react';
import styles from '../../styles/Starwars.module.css';
import { HiArrowLeft } from "react-icons/hi";
import Pagination from './Pagination';
import Search from './Search';
import Spinner from './Spinner';

const Characters = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [modal, setModal] = useState(false);
  let [about, setAbout] = useState({});

  let [fetchData, setFetchData] = useState([]);
  let { info, results } = fetchData;

  let api = `https://swapi.dev/api/people?search=${search}&page=${pageNumber}`;
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
    let { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld } = about.result;
    
    return (
      <div className={styles.modal}>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>{name}</h3> 
            <p><span>Height</span> {height}cm</p>
            <p><span>Mass</span> {mass}</p>
            <p><span>Hair Color</span> {hair_color}</p>
            <p><span>Skin Color</span> {skin_color}</p>
            <p><span>Eye Color</span> {eye_color}</p>  
            <p><span>Birth Year</span> {birth_year}</p>  
            <p><span>Gender</span> {gender}</p> 
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

export default Characters
