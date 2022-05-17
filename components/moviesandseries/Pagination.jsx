import ReactPaginate from 'react-paginate';
import styles from '../../styles/Movies.module.css';

const Pagination = ({total, pageNumber, setPageNumber}) => {

    return (
        <ReactPaginate
            nextLabel="Next"
            previousLabel="Prev"
            activeClassName={styles.active} 
            className={styles.pagination}
            onPageChange={ (data) => {
                setPageNumber(data.selected + 1);
            }}
            pageCount={Math.ceil(total / 10)} 
        />
    )
}

export default Pagination