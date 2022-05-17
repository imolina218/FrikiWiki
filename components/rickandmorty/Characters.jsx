import { useState, useEffect } from 'react';
import Search from './characters/Search';
import Filter from './filter/Filter';
import Card from './characters/Card';
import Pagination from './characters/Pagination';

const Characters = () => {

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
        </>
    )
}

export default Characters