import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Rickandmorty.module.css';
import NavHead from '../components/rickandmorty/NavHead';
import Filter from '../components/rickandmorty/filter/Filter';
import Card from '../components/rickandmorty/characters/Card';
import Search from '../components/rickandmorty/characters/Search';
import Pagination from '../components/rickandmorty/characters/Pagination';

const rickandmorty = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [specie, setSpecie] = useState("");

  let [fetchData, setFetchData] = useState([]);
  let { info, results } = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${specie}`;

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data)
    })()
  }, [api]);

  return (
    <>

      <NavHead />

      <main className={styles.container}>
        <div className={styles.img}>
          <Image
            priority
            src="/img/randm/Banner.png"
            alt="Rick and Morty banner"
            width={2000}
            height={500}
          />
        </div>

        <div>
          <Search 
            setPageNumber={setPageNumber}
            setSearch={setSearch}
          />
        </div>

        <div>
          <Filter 
            setStatus={setStatus}
            setGender={setGender}
            setSpecie={setSpecie}
            setPageNumber={setPageNumber}
          />
        </div>
        
        <div>
          <Card 
            results={results}
          />
        </div>
        
        <div>
          <Pagination 
            setPageNumber={setPageNumber}
            pageNumber={pageNumber}
            info={info}
          />
        </div>
      </main>
    </>
  )
}

export default rickandmorty