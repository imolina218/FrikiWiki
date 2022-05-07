import styles from '../../../styles/Rickandmorty.module.css'
import Gender from './category/Gender'
import Species from './category/Species'
import Status from './category/Status'

const Filter = ({ setStatus, setPageNumber, setGender, setSpecie }) => {

  let clear = () => {
    setStatus(""),
    setPageNumber(""), 
    setGender(""), 
    setSpecie("")
    window.location.reload(false);
  }

  return (
    <div className={styles.filters}>
      
      <p>Filter</p>
      <div 
        className={styles.clear}
        onClick={clear}
      >Clear Filters</div>
      
      <div>

        <Status 
          setPageNumber={setPageNumber}
          setStatus={setStatus}
        />
        <Gender 
          setPageNumber={setPageNumber}
          setGender={setGender}
        />
        <Species 
          setPageNumber={setPageNumber}
          setSpecie={setSpecie}
        />
    
      </div>
    </div>
  )
}

export default Filter