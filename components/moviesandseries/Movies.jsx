import { useState, useEffect } from 'react';
import { HiArrowLeft } from "react-icons/hi";
import Search from "./Search";
import Pagination from "./Pagination";
import styles from '../../styles/Movies.module.css';

const Movies = ({publicKey}) => {
    let [modal, setModal] = useState(false);
    let [info, setInfo] = useState(null);
    let [search, setSearch] = useState("Star")
    let [pageNumber, setPageNumber] = useState(1)
    let [fetchData, setFetchData] = useState([]);
    let [fetchDataInfo, setFetchDataInfo] = useState([]);
    let { totalResults, Response } = fetchData;
    let results  = fetchData.Search;
    let display;
      
    let api = `https://www.omdbapi.com/?apikey=${publicKey}&s=${search}&type=movie&page=${pageNumber}`;
    
  
    const handleModal = () => {
        return setModal(!modal);
    }
  
    useEffect(() => {
        (async function(){
            let data = await fetch(api).then((res) => res.json());
            setFetchData(data)
        })()

        if(modal) {
            let apiInfo = `https://www.omdbapi.com/?apikey=${publicKey}&i=${info.result.imdbID}&plot=full&type=movie`;
            (async function(){
                let data = await fetch(apiInfo).then((res) => res.json());
                setFetchDataInfo(data)
            })()
        }
    
    }, [api, modal]);

    if(results) {
        display = results.map(result => {
            let { imdbID, Title, Poster } = result;
            return (
                
                <div key={imdbID}>
                    <div className={styles.cardimgcomic}>
                        <img src={`${Poster}`} alt={`${Title} image`} />
                    </div>      
        
                    <div>
                        <p>{Title}</p>
                    </div>
        
                    <button
                        className={styles.learnmore}
                        type="button"
                        onClick={ () => {{
                            handleModal(),
                            setInfo({result})
                        }}}
                    >Learn More</button>
                
                </div>
            )
        });
    } else {
        display = "No Results Found";
      /* display = <Spinner /> */
    }
  
    if(modal) {
        let {Title, Rated, Released, Runtime, Genre, Director, 
            Writer, Actors, Plot, Language, Country, Ratings, Awards, 
            Poster, BoxOffice} = fetchDataInfo;

        return (
            <div className={styles.modal}>

                <button 
                    className={styles.close} 
                    type="button" 
                    onClick={ () => {{
                        handleModal(),
                        setInfo({}),
                        setFetchDataInfo([])
                    }}}>
                    <HiArrowLeft />
                </button>
                
                <h3>{Title}</h3>

                <img src={`${Poster}`} alt={`${Title} image`}/>
        
                <div className={styles.info}>
                    <p><span>Released :</span> {Released}</p>
                    <p><span>Rated :</span> {Rated}</p>
                    <p><span>Runtime :</span> {Runtime}</p>
                    <p><span>Genre :</span> {Genre}</p> 
                    <p><span>Director :</span> {Director}</p> 
                    <p><span>Writer :</span> {Writer}</p> 
                    <p><span>Actors :</span> {Actors}</p> 
                    <p><span>Plot :</span> {Plot}</p> 
                    <p><span>Language :</span> {Language}</p> 
                    <p><span>Country :</span> {Country}</p> 
                    <p><span>Awards :</span> {Awards}</p>
                    <p><span>Ratings :</span></p>
                    <div>
                        {Ratings?.map(rating => (
                            <p key={rating.Source}>- {rating.Source}: {rating.Value}</p> 
                        ))}
                    </div> 
                    <p><span>BoxOffice :</span> {BoxOffice}</p>
                </div>
                
            </div>    
                
        )
    }
  
    return (
        <>

            <Search 
                setSearch={setSearch}
                setPageNumber={setPageNumber}
            />

            <ul className={styles.card}>
                {display}
            </ul>
  
            <Pagination 
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                total={totalResults}
            />
        </>
    )
}

export default Movies