import { useState } from 'react';
import styles from '../../../styles/Rickandmorty.module.css';

const FilterBTN = ({ name, index, items, task, setPageNumber }) => {


  return (
    <div className={styles.radio}>
        <label htmlFor={`${name} - ${index}`}>{items}</label>
        <input 
            type="radio" 
            name={name} 
            id={`${name} - ${index}`}
            onClick={() => {
              setPageNumber(1);
              task(items);
            }}
        />
    </div>
  )
}

export default FilterBTN
