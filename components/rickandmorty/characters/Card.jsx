import styles from '../../../styles/Rickandmorty.module.css'

const Card = ({results}) => {

  let display;

  if(results) {
    display = results.map(result => {
      let { id, name, image, location, status } = result;
      return(
        <li className={styles.card} key={id}>
          <img src={image} alt={`${name} thumb`} />

          <div className={styles.content}>
            <p>{name}</p>
            <p><span>Last Location: </span>{location.name}</p>
            <p><span>Status: </span>{status}</p>
          </div>
        </li> 
      )
    });
  } else {
    display = "No Results Found";
  }

  return (
    <>
      <ul className={styles.cards}>
        {display}
      </ul>
    </>
  )
}

export default Card