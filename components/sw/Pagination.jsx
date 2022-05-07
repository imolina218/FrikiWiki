import ReactPaginate from 'react-paginate';
import styles from '../../styles/Starwars.module.css';

const Pagination = ({fetchData, pageNumber, setPageNumber}) => {

    let { count } = fetchData;

    return (
        <ReactPaginate
            nextLabel="Next"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            previousLabel="Prev"
            activeClassName={styles.active} 
            className={styles.pagination}
            onPageChange={ (data) => {
                setPageNumber(data.selected + 1);
            }}
            pageCount={Math.ceil(count / 10)} 
        />
    )
}

export default Pagination