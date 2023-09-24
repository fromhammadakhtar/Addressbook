import Pagination from '@material-ui/lab/Pagination';
import './Pagination.scss';

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onChange: (newPage: number) => void;
}

const PaginationComponent = (props: PaginationProps) => {
  const { currentPage, pageCount, onChange } = props;
  return (
    <div className='pagination-container'>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={(_, newPage) => onChange(newPage)}
        variant='outlined'
        shape='rounded'
        color='secondary'
      />
    </div>
  );
};

export default PaginationComponent;
