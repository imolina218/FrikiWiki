import FilterBTN from "../FilterBTN"
import styles from '../../../../styles/Rickandmorty.module.css'

const Gender = ({ setPageNumber, setGender }) => {

  let genders = ["female", "male", "genderless", "unknown"]

  return (
    <div className={styles.filtertype}>
      <h3>Gender</h3>
      <div className={styles.radios}>
        {genders.map((items, index) =>
          <div key={index}>
            <FilterBTN 
              task={setGender}
              setPageNumber={setPageNumber}
              key={index} 
              name="status" 
              index={index} 
              items={items}
            /> 
          </div> 
        )}
      </div>
      
    </div>
  )
}

export default Gender