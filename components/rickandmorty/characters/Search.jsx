import { useState } from 'react';
import styles from '../../../styles/Rickandmorty.module.css';

const Search = ({ setPageNumber, setSearch }) => {

  let [input, setInput] = useState("")

  return (
    <form className={styles.search}>
      <input
        type="text" 
        placeholder='Search Characters'
        onChange={ e => {
          setInput(e.target.value);
        }} 
      />
      <button
        type="button"
        onClick={ () => {
          setPageNumber(1);
          setSearch(input);
        }}
      >Search</button>
    </form>
  )
}

export default Search