import styles from '../../styles/Marvel.module.css';

const Pagination = ({pageNumber, setPageNumber, total}) => {

    const handlePrev = () => {
        {pageNumber - 50 < 0 ? setPageNumber(0) : setPageNumber(pageNumber-50)};
    }
    const handleNext = () => {
        {pageNumber > total ? setPageNumber(pageNumber) : setPageNumber(pageNumber+50)};
    }

    return (
        <div className={styles.pagination}>
            <button
                type="button"
                onClick={ () => handlePrev()}
            >Prev</button>
            
            <button
                type="button"
                onClick={ () => handleNext()}
            >Next</button>
        </div>
    )
}

export default Pagination