import FilterBTN from "../FilterBTN"
import styles from '../../../../styles/Rickandmorty.module.css'

const Species = ({ setPageNumber, setSpecie }) => {

  let species = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"];

  return (
    <div className={styles.filtertype}>
      <h3>Species</h3>
      <div className={styles.radios}>
        {species.map((items, index) =>
          <div key={index}>
            <FilterBTN
              task={setSpecie}
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

export default Species