import ReactPaginate from 'react-paginate';
import styles from '../../../styles/Rickandmorty.module.css';

const Pagination = ({ info, pageNumber, setPageNumber }) => {

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
      pageCount={info?.pages} 
    />
  )
}

export default Pagination