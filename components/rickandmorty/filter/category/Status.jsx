import { useState } from 'react'
import FilterBTN from "../FilterBTN"
import styles from '../../../../styles/Rickandmorty.module.css'

const Status = ({ setStatus, setPageNumber }) => {
  let [id, setId] = useState(1);
  let status = ["Alive", "Dead", "Unknown"];
  
  return (
    <div className={styles.filtertype}>
      <div>
        <h3>Status</h3>
        <div className={styles.radios}>
          {status.map((items, index) =>
            <div key={index}>
              <FilterBTN 
                task={setStatus}
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
      
    </div> 
  )
}

export default Status